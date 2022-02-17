'use strict';
module.exports = (sequelize, DataTypes) => {
  const MyShowList = sequelize.define('MyShowList', {
    currWatch: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    watched: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    wantWatch: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
  }, {});
  MyShowList.associate = function (models) {
    // associations can be defined here
    MyShowList.belongsTo(models.User, { foreignKey: 'userId' });

      const columnMapping = {
        otherKey: 'showsId',
        through: 'MyShowListShows',
        foreignKey: 'myShowListId'
      }

      MyShowList.belongsToMany(models.Show, columnMapping);
  };
  return MyShowList;
};
