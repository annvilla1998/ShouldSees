"use strict";
module.exports = (sequelize, DataTypes) => {
  const MyShowList = sequelize.define(
    "MyShowList",
    {
      listName: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  MyShowList.associate = function (models) {
    // associations can be defined here
    MyShowList.belongsTo(models.User, { foreignKey: "userId" });

    const columnMapping = {
      otherKey: "showsId",
      through: "MyShowListShow",
      foreignKey: "myShowListId",
    };

    MyShowList.belongsToMany(models.Show, columnMapping);
    MyShowList.hasMany(models.MyShowListShow, { foreignKey: "myShowListId" });
  };
  return MyShowList;
};
