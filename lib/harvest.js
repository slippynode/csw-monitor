"use strict";

var http = require('http')
  , querystring = require('querystring')
  , url = require('url')
  , xml2js = require('xml2js')
;

function Harvest () {
  var self = this;
  self.init(arguments[0]);
}

Harvest.prototype.init = function (url, opts) {
  var elementSetName
    , host
    , maxRecords
    , outputSchema
    , parsedInputUrl
    , parsedUrl
    , pathname
    , protocol
    , query
    , request
    , resultType
    , self
    , service
    , slashes
    , startPosition
    , typeNames
    , version
  ;

  self = this;

  if (!url) throw new Error('Host is required!');

  parsedInputUrl = url.parse(url);

  protocol = parsedInputUrl.protocol;
  slashes = parsedInputUrl.slashes;
  host = parsedInputUrl.host;
  pathname = parsedInputUrl.pathname;

  request = typeof opts.request !== 'undefined'
    ? request
    : 'GetRecords'
  ;

  service = typeof opts.service !== 'undefined'
    ? service
    : 'CSW'
  ;

  version = typeof opts.version !== 'undefined'
    ? version
    : '2.0.2'
  ;

  elementSetName = typeof opts.elementSetName !== 'undefined'
    ? elementSetName
    : 'full'
  ;

  typeNames = typeof opts.typeNames !== 'undefined'
    ? typeNames
    : 'gmd:MD_Metadata'
  ;

  resultType = typeof opts.resultType !== 'undefined'
    ? resultType
    : 'results'
  ;

  outputSchema = typeof opts.outputSchema !== 'undefined'
    ? outputSchema
    : 'http://www.isotc211.org/2005/gmd'
  ;

  startPosition = typeof opts.startPosition !== 'undefined'
    ? startPosition
    : '0'
  ;

  maxRecords = typeof opts.maxRecords !== 'undefined'
    ? maxRecords
    : '20'
  ;

  query = querystring.stringify({
    request: request,
    service: service,
    version: version,
    elementSetName: elementSetName,
    typeNames: typeNames,
    resultType: resultType,
    outputSchema: outputSchema,
    startPosition: startPosition,
    maxRecords: maxRecords
  });

  self.url = url.format({
    protocol: protocol,
    slashes: slashes,
    host: host,
    pathname: pathname,
    query: query
  });

  parsedUrl = url.parse(self.url);

  self.host = parsedUrl.host;
  self.path = parsedUrl.path;
}

Harvest.prototype.request = function (done) {
  var callback
    , options
    , request
    , self
  ;

  self = this;

  options = {
    hostname: self.host,
    path: self.path,
    method: 'GET'
  };

  callback = function (response) {
    var body = '';
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      body += chunk;
    });

    response.on('end', function () {
      done(body);
    });

    response.on('error', function (error) {
      console.log(error);
    });
  }

  request = http.request(options, callback);
  request.end();
}

Harvest.prototype.consumer = function () {

}

module.exports = Harvest;