"use strict";

module.exports = function (sequelize, DataTypes) {
  var Ping = sequelize.define('Ping', {
    status: DataTypes.INTEGER,
    latest: DataTypes.INTEGER,
    host_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return Ping;
};