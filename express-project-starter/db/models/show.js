'use strict';
const {
  Model
} = require('sequelize');
const review = require('./review');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const columnMapping = {
        otherKey: 'myShowListId',
        through: 'MyShowListShows',
        foreignKey: 'showId'
       }

      Show.belongsToMany(models.MyShowList, columnMapping);
      Show.hasMany(models.Review, { foreignKey: 'showId' });
    }
  }
  Show.init({
    image: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    criticRating: DataTypes.NUMERIC,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    cast: DataTypes.TEXT,
    genre: DataTypes.STRING,
    myShowListId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};
