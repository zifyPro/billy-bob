require("dotenv").config();
const { Ventas } = require("../../db");

const GetVentas = async () => {
  const newVenta = await Ventas.findAll();
  const result = newVenta.map((elem) => {
    return {
      id: elem.id,
      nombre: elem.nombre,
      direccion: elem.direccion,
      numeroDeOrden: elem.numeroDeOrden,
      estadoDeProducto: elem.estadoDeProducto,
      compraRealizada: elem.compraRealizada,
    };
  });
  return result;
};
module.exports = GetVentas;
