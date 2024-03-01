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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numeroDeOrden: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estadoDeProducto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compraRealizada: {
        type: DataTypes.DATE,
      },
    },
    { timestamps: false }
  );
};
