const getProductById = require("../../controllers/Productos/productosId");

const HandlersById = async (req, res) => {
  try {
    const { id } = req.params;
    const newId = await getProductById(id);
    res.status(200).json(newId);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = HandlersById;
