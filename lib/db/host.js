"use strict";

module.exports = function (sequelize, DataTypes) {
  var Host = sequelize.define('Host', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    url: DataTypes.STRING,
    linkage_count: DataTypes.INTEGER,
    ping_count: DataTypes.INTEGER
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return Host;
}