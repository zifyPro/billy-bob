const { Ventas, Ingredientes } = require("../../db");

const CreateVentas = async (
  nombre,
  direccion,
  telefono,
  estadoDeProducto,
  ingredientes,
  tipoDePago,
  compraRealizada
) => {
  const response = await Ventas.create({
    nombre,
    direccion,
    telefono,
    estadoDeProducto,
    compraRealizada,
    tipoDePago,
  });
  ingredientes.map(async (cant) => {
    const newResponse = await Ingredientes.findAll({
      where: { cantidad: cant },
    });
    newResponse.forEach(async (ingrediente) => {
      await ingrediente.update({ cantidad: ingrediente.cantidad - 1 });
    });
    await response.Ingredientes.destroy(newResponse);
  });
  return response;
};

module.exports = CreateVentas;
