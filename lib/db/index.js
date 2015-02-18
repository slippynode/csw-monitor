"use strict";

var config = require(__dirname + '/../../config.json')
  , fs = require('fs')
  , path = require('path')
  , Sequelize = require('sequelize')
  , sequelize = new Sequelize(
      config.database,
      config.username,
      config.password
      config)
  ;

function DB () {
  var self = this;
  self.init(arguments[0]);
}

DB.prototype.init = function (options) {
  var i
    , models
    , self
  ;

  self = this;

  fs
    .readdirSync(__dirname)
    .filter(function (file) {
      return (file.indexOf('.js') > -1 && (file !== 'index.js'));
    })
    .forEach(function (file) {
      var model = sequelize['import'](path.join(__dirname, file));
      self[model.name] = model;
    })
  ;

  models = Object.keys(self);

  for (i = 0; i < models.length; i++) {
    if ('associate' in self[models[i]])
      self[models[i]].associate(self);
  }
}

DB.prototype.getModel = function (table) {
  var i
    , models
    , self
  ;

  self = this;

  for (i = 0; i < models.length; i++) {
    if (models[i] === table)
      return self[models[i]];
  }

  return null;
}

DB.sequelize = sequelize;
DB.Sequelize = Sequelize;

module.exports = DB;