"use strict";

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
    }
  );

  Todo.associate = (models) => {
    Todo.belongsTo(models.Users, { foreignKey: "userId", targetKey: "id" });
  };
  return Todo;
};
