const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ventas",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estadoDeProducto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compraRealizada: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.DATE,
      },
      tipoDePago: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
