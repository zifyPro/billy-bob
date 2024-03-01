const getVentasById = require("../../controllers/Ventas/VentasId");

const HandlersIdVentas = async (req, res) => {
  try {
    const { id } = req.params;
    const newVenta = await getVentasById(id);
    res.status(200).json(newVenta);
  } catch (error) {
    res.status(404).jso({ error: error.message });
  }
};
module.exports = HandlersIdVentas;
