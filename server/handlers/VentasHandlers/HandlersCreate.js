const CreateVentas = require("../../controllers/Ventas/createVentas");

const HandlersCreateVentas = async (req, res) => {
  try {
    const {
      nombre,
      direccion,
      numeroDeOrden,
      estadoDeProducto,
      compraRealizada,
    } = req.body;
    const newVentas = await CreateVentas(
      nombre,
      direccion,
      numeroDeOrden,
      estadoDeProducto,
      compraRealizada
    );
    res.status(200).json(newVentas);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = HandlersCreateVentas;
