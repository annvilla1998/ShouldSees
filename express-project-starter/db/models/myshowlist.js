'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyShowList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MyShowList.belongsTo(models.User, { foreignKey: 'userId' });

      const columnMapping = {
        otherKey: 'showId',
        through: 'MyShowListShows',
        foreignKey: 'myShowListId'
       }

      MyShowList.belongsToMany(models.Show, columnMapping);
    }
  }
  MyShowList.init({
    currWatch: DataTypes.BOOLEAN,
    watched: DataTypes.BOOLEAN,
    wantWatch: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MyShowList',
  });
  return MyShowList;
};
