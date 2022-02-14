'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MyShowLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
    await queryInterface.dropTable('MyShowLists');
  }
};
