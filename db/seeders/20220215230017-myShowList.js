'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('MyShowLists', [
      {
        currWatch: true,
        watched: false,
        wantWatch: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        currWatch: true,
        watched: false,
        wantWatch: false,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        currWatch: false,
        watched: true,
        wantWatch: false,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        currWatch: false,
        watched: false,
        wantWatch: true,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        currWatch: false,
        watched: true,
        wantWatch: false,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        currWatch: true,
        watched: false,
        wantWatch: false,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        currWatch: false,
        watched: false,
        wantWatch: true,
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        currWatch: true,
        watched: false,
        wantWatch: false,
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('MyShowLists', null, {});
  }
};
