'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
        type: Sequelize.NUMERIC(2,1)
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
    await queryInterface.dropTable('Shows');
  }
};
