'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const seedReviews = (num) => {
      let i = 0;
      let reviewArr = [];
      while (i < num) {
        const review = {
          content: faker.lorem.sentences(),
          userId: i + 1,
          showsId: i + 1,
          rating: faker.datatype.number() % 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
        reviewArr.push(review);
        i++;
      }
      return reviewArr;
    }
      return queryInterface.bulkInsert('Reviews', seedReviews(8), {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
