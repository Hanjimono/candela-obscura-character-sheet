"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("class", [
      {
        id: 1,
        name: "Face",
        nameRu: "Представитель",
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Muscle",
        nameRu: "Мышцы",
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Scholar",
        nameRu: "Ученый",
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Slink",
        nameRu: "Хитрец",
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Weird",
        nameRu: "Чудак",
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("class", null, {})
  }
}
