'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MyShowListShows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      myShowListId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'MyShowLists'}
      },
      showsId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Shows'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MyShowListShows');
  }
};
