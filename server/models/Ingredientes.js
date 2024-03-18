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
      },
      cantidad: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      img: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    { timestamps: false }
  );
};
