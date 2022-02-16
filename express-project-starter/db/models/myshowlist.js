'use strict';
module.exports = (sequelize, DataTypes) => {
  const MyShowList = sequelize.define('MyShowList', {
    currWatch: {
      allowNull: false,
      defaultValue: false,
      type: Sequelize.BOOLEAN
    },
    watched: {
      allowNull: false,
      defaultValue: false,
      type: Sequelize.BOOLEAN
    },
    wantWatch: {
      allowNull: false,
      defaultValue: false,
      type: Sequelize.BOOLEAN
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'Users' }
    },
  }, {});
  MyShowList.associate = function (models) {
    // associations can be defined here
  };
  return MyShowList;
};
