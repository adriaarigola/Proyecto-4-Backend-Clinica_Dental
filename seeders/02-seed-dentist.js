'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("patients", [
      {
        id_user: 5, // 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 6, // 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 8, // 4
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
