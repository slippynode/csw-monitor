var express = require('express')
  , DB = require('./db')
  , db = new DB()
  , routes = require('./routes')(db)
;

var server = express();
server.set('port', process.env.PORT || 3030);

module.exports = function (callback) {
  db.sync()
    .then(function () {
      callback(null, server);
    })
    .otherwise(function (error) {
      callback(error);
    })
  ;
}