const DeleteProduct = require("../../controllers/Productos/deleteProduct");

const ProductDelete = async (req, res) => {
  try {
    const { id } = req.body;
    const newProduct = await DeleteProduct(id);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = ProductDelete;
