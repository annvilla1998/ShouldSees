'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const seedReviews = (num) => {
      let i = 0;
      let reviewArr = [];
      while (i < num) {
        const review = {
          content:  faker.fake('{{random.arrayElement(["Picture", "This show reminds me of", "Spoiler Alert:","Great if you like", "Five Words:", "Everybody I talked to said it\'s like"])}} a {{name.jobArea}} {{name.jobType}} {{animal.bear}} {{random.arrayElement(["wearing","destroying", "walking","pooping","eating"])}} some {{commerce.productName}} {{random.arrayElement(["😊","🙃","🤪","🤓","🤯","😴","💩","👻","👽","🤖","👾","👐","🖖","✌️","🤟","🤘","🤙","👋","🐭","🦕","🦖","🐉"])}}'),
          userId: Math.floor(Math.random() * 8) + 1, // 9 users (+1 so we don't get 0)
          showsId: Math.floor(Math.random() * 19) + 1, //20 shows
          rating: faker.datatype.number() % 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
        reviewArr.push(review);
        i++;
      }
      return reviewArr;
    }
      return queryInterface.bulkInsert('Reviews', seedReviews(100), {});
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
