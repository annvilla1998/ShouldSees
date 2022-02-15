'use strict';

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('Users', [
      {
        username: 'JohnWick',
        hashedPassword: faker.internet.password(),
        email: 'john@wick.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'PeterParker',
        hashedPassword: faker.internet.password(),
        email: 'spider@web.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'HankHill',
        hashedPassword: faker.internet.password(),
        email: 'propane@aol.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: faker.internet.userName(),
        hashedPassword: faker.internet.password(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
