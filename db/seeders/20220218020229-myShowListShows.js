'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('MyShowListShows', [
    {
      myShowListId: 1,
      showsId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      myShowListId: 1,
      showsId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      myShowListId: 2,
      showsId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      myShowListId: 3,
      showsId: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      myShowListId: 8,
      showsId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      myShowListId: 9,
      showsId: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      myShowListId: 20,
      showsId: 21,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      myShowListId: 18,
      showsId: 19,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      myShowListId: 17,
      showsId: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      myShowListId: 13,
      showsId: 5,
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
   return queryInterface.bulkDelete('MyShowListShows', null, {});
  }
};
