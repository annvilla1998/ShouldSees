'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const seedShows = (num) => {
      let i = 0;
      let showArr = [];
      while (i < num) {
        const show = {
          image: `${faker.image.imageUrl()}?random=${Date.now()}`,
          releaseDate: faker.date.past(),
          criticRating: faker.datatype.number() % 10,
          name: faker.random.words(),
          description: faker.lorem.sentences(),
          cast: faker.fake('{{name.lastName}}, {{name.firstName}}'),
          genre: faker.random.arrayElement(['Comedy', 'Horror', 'Drama', 'Romance', 'SciFi', 'Fantasy']),
          myShowListId: i + 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
        showArr.push(show);
        i++;
      }
      return showArr;
    }
    return queryInterface.bulkInsert('Shows', seedShows(8), {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Shows', null, {});
  }
};
