var sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      timestamps: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: "false",
      timestamps: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps:true
  });
  return burgers;
};

