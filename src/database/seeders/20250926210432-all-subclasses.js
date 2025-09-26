"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("subclass", [
      {
        id: 1,
        name: "Journalist",
        nameRu: "Журналист",
        classId: 1,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Magician",
        nameRu: "Фокусник",
        classId: 1,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Explorer",
        nameRu: "Исследователь",
        classId: 2,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Soldier",
        nameRu: "Солдат",
        classId: 2,
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Doctor",
        nameRu: "Доктор",
        classId: 3,
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "Professor",
        nameRu: "Профессор",
        classId: 3,
        order: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: "Criminal",
        nameRu: "Преступник",
        classId: 4,
        order: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: "Detective",
        nameRu: "Детектив",
        classId: 4,
        order: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: "Medium",
        nameRu: "Медиум",
        classId: 5,
        order: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: "Occultist",
        nameRu: "Оккультист",
        classId: 5,
        order: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("subclass", null, {})
  }
}
