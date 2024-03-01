const { Ventas } = require("../../db");

const ActualityVentas = async (
  id,
  nombre,
  direccion,
  numeroDeOrden,
  estadoDeProducto,
  compraRealizada
) => {
  const updateVentas = await Ventas.put({
    where: { id: id },
    nombre,
    direccion,
    numeroDeOrden,
    estadoDeProducto,
    compraRealizada,
  });
  return updateVentas;
};
module.exports = ActualityVentas;
