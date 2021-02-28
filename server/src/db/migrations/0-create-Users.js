"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      login: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: "anon.png",
        allowNull: false,
      },
      role: {
        type: Sequelize.ENUM("user", "admin"),
        allowNull: false,
        defaultValue: "user",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};
