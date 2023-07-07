'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          user_name: "Adria", // 1
          user_last_name: "Rigola",
          birthday: "2001-10-01",
          email: "admin@admin.com",
          password: encryptedPassword,
          phone: 636382491,
          address: "Calle de Cervantes, 26",
          id_role: 1, // admin
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Jose", // 2
          user_last_name: "Palacios",
          birthday: "1996-05-01",
          email: "jose@palacios.com",
          password: encryptedPassword,
          phone: 636382492,
          address: "Calle del Río, 22",
          id_role: 2, // dentist
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Steven", // 3
          user_last_name: "Garzon",
          birthday: "1996-04-30",
          email: "stevengarzon@gmail.com",
          password: encryptedPassword,
          phone: 636382493,
          address: "Calle Colombia, 36",
          id_role: 2, // dentist
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Ernesto", // 4
          user_last_name: "Perez",
          birthday: "1966-07-23",
          email: "ernesto@perez.com",
          password: encryptedPassword,
          phone: 636382494,
          address: "Avenida Augusta, 44",
          id_role: 3, // patient
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Vicente", //5
          user_last_name: "Ruiz",
          birthday: "1987-12-31",
          email: "vicente@ruiz.com",
          password: encryptedPassword,
          phone: 636382495,
          address: "Calle del Paraiso, 19",
          id_role: 3, // patient
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Enrique", //6
          user_last_name: "Cervantes",
          birthday: "1974-01-15",
          email: "enrique@cervantes.com",
          password: encryptedPassword,
          phone: 636382496,
          address: "Calle de Ramos, 44",
          id_role: 3, // patient
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Marta", // 7
          user_last_name: "Garcia",
          birthday: "2002-09-10",
          email: "marta@garcia.com",
          password: encryptedPassword,
          phone: 636382497,
          address: "Avenida Mayor, 3",
          id_role: 3, // patient
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Fernando", // 8
          user_last_name: "Fernandez",
          birthday: "1995-08-02",
          email: "fernando@fernandez.com",
          password: encryptedPassword,
          phone: 636382498,
          address: "Calle de Barcelona, 8",
          id_role: 3, // patient
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Adriana", // 9
          user_last_name: "Pardo",
          birthday: "1992-12-30",
          email: "adriana@pardo.com",
          password: encryptedPassword,
          phone: 636382499,
          address: "Calle de Blasco, 2",
          id_role: 3, // patient
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
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
