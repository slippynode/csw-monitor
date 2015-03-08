'use strict';

var _ = require('lodash')
  , config = require(__dirname + '/../../config.json')
  , knex = require('knex')(config.db)
  , bookshelf = require('bookshelf')(knex)
  , fs = require('fs')
  , path = require('path')
  , schema = require('./schema')
  , sequence = require('when/sequence')
;

function DB () {
  this.init(arguments[0]);
}

DB.prototype.init = function (options) {
  this.schema = schema;
}

DB.prototype.createTable = function (table) {

}

DB.prototype.sync = function () {
  var self
    , tables
    , names
  ;

  self = this;
  names = _.keys(self.schema);
  tables = _.map(names, function (name) {
    return function () {
      return self.createTable(name);
    };
  });
  return sequence(tables);
}

module.exports = DB;