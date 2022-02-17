'use strict';
module.exports = (sequelize, DataTypes) => {
  const MyShowListShow = sequelize.define('MyShowListShow', {
    myShowListId: DataTypes.INTEGER,
    showsId: DataTypes.INTEGER
  }, {});
  MyShowListShow.associate = function(models) {
    // associations can be defined here
  };
  return MyShowListShow;
};