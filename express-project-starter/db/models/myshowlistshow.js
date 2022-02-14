'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyShowListShow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MyShowListShow.init({
    myShowListId: DataTypes.INTEGER,
    showsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MyShowListShow',
  });
  return MyShowListShow;
};