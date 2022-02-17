'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    showsId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Shows' }
    },
    rating: {
      allowNull: false,
      type: DataTypes.NUMERIC(2,1)
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Show, { foreignKey: 'showsId' });
  };
  return Review;
};
