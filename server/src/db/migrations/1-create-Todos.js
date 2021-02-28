"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Todos", {
      id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        references: { model: "Users", key: "id" },
        allowNull: false,
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isDone: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Todos");
  },
};
