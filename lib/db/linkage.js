"use strict";

module.exports = function (sequelize, DataTypes) {
  var Linkage = sequelize.define('Linkage', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    url: DataTypes.STRING,
    format: DataTypes.STRING,
    host_id: DataTypes.STRING,
    status: DataTypes.INTEGER,
    status_count: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return Linkage;
};