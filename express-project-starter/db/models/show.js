'use strict';
module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    image: {
      allowNull: false,
      type: Sequelize.STRING
    },
    releaseDate: {
      allowNull: false,
      type: Sequelize.DATE
    },
    criticRating: {
      allowNull: false,
      type: Sequelize.NUMERIC(2, 1)
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    cast: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    genre: {
      allowNull: false,
      type: Sequelize.STRING
    },
    myShowListId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'MyShowLists' }
    }
  }, {});
  Show.associate = function (models) {
    // associations can be defined here
  };
  return Show;
};
