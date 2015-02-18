"use strict";

module.exports = function (sequelize, DataTypes) {
  var Status = sequelize.define('Status', {
    res_code: DataTypes.INTEGER,
    res_message: DataTypes.STRING,
    res_time: DataTypes.DATE,
    status_message: DataTypes.STRING,
    latest: DataTypes.INTEGER,
    host_id: DataTypes.INTEGER,
    linkage_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return Status;
};