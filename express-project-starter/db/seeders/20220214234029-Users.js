'use strict';

const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        username: 'John Wick',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        email: 'john@wick.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Peter Parker',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        email: 'spider@web.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Hank Hill',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        email: 'propane@aol.com',
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
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
