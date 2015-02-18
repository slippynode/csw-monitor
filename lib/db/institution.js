"use strict";

module.exports = function (sequelize, DataTypes) {
  var Institution = sequelize.define('Institution', {
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return Institution;
};