'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, { foreignKey: 'userId' });
      Review.belongsTo(models.Show, { foreignKey: 'showId' });
    }
  }
  Review.init({
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    showsId: DataTypes.INTEGER,
    rating: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
