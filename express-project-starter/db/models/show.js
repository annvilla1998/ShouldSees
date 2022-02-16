'use strict';
module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    image: {
      allowNull: false,
      type: DataTypes.STRING
    },
    releaseDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    criticRating: {
      allowNull: false,
      type: DataTypes.NUMERIC(2, 1)
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    cast: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    genre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    myShowListId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'MyShowLists' }
    }
  }, {});
  Show.associate = function (models) {
    // associations can be defined here
    Show.belongsToMany(models.MyShowList, columnMapping);
    Show.hasMany(models.Review, { foreignKey: 'showId' });
  };
  return Show;
};
