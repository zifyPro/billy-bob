const GetVentas = require("../../controllers/Ventas/getVentas");

const HandlersVentas = async (req, res) => {
  try {
    const newVenta = await GetVentas();
    res.status(200).json(newVenta);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = HandlersVentas;
