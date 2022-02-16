'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique: true
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(255),
      unique: true
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.MyShowList, { foreignKey: 'userId' });
    User.hasMany(models.Review, { foreignKey: 'userId' });
  };
  return User;
};
