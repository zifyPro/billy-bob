const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ingredientes",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
