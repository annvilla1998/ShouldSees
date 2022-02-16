'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'Users' }
    },
    showsId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'Shows' }
    },
    rating: {
      allowNull: false,
      type: Sequelize.NUMERIC(2,1)
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};
