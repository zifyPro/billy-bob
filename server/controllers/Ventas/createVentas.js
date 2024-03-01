const { Ventas } = require("../../db");

const CreateVentas = async (
  nombre,
  direccion,
  numeroDeOrden,
  estadoDeProducto,
  compraRealizada
) => {
  const response = await Ventas.create({
    nombre,
    direccion,
    numeroDeOrden,
    estadoDeProducto,
    compraRealizada,
  });
  return response;
};
module.exports = CreateVentas;
