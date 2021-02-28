module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "anon.png",
      },
      role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user",
        allowNull: false,
      },
    },
    {
      timestamps: true,
      updatedAt: false,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Todos, { foreignKey: "userId", targetKey: "id" });
  };

  return User;
};
