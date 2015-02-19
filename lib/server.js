var express = require('express')
  , routes = require('./routes')
  , db = require('./db')
;

var server = express();
server.set('port', process.env.PORT || 3030);

module.exports = function (done) {
  db.sequelize.sync()
    .then(function () {
      return done(null, server);
    })
    .catch(function (err) {
      return done(err);
    })
  ;
}