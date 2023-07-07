'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("doctors", [
      {
        id_user: 2, // 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_user: 3, // 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_user: 4, // 3
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
