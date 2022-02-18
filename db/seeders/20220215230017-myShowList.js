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
        listName: "Want To Watch",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Currently Watching",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Watched",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Want To Watch",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Currently Watching",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Watched",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Want To Watch",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Currently Watching",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Watched",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Want To Watch",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Currently Watching",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Watched",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Want To Watch",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Currently Watching",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Watched",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Want To Watch",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Currently Watching",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Watched",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Want To Watch",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Currently Watching",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Watched",
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Want To Watch",
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Currently Watching",
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        listName: "Watched",
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
