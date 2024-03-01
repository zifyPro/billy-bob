const ActualityVentas = require("../../controllers/Ventas/updateVentas");

const HandlersUpdateVentas = async (req, res) => {
  try {
    const {
      id,
      nombre,
      direccion,
      numeroDeOrden,
      estadoDeProducto,
      compraRealizada,
    } = req.body;
    const newVenta = await ActualityVentas(
      id,
      nombre,
      direccion,
      numeroDeOrden,
      estadoDeProducto,
      compraRealizada
    );
    res.status(200).json(newVenta);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = HandlersUpdateVentas;
