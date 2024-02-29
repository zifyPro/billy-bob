const createProducto = require("../../controllers/Productos/createProduct");

const HandlersCreateProductos = async (req, res) => {
  try {
    const { data } = req.body;
    const newProduct = await createProducto(data);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = HandlersCreateProductos;
