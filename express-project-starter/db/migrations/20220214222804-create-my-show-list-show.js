'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MyShowListShows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      myShowListId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'MyShowLists' }
      },
      showsId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Shows' }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MyShowListShows');
  }
};
