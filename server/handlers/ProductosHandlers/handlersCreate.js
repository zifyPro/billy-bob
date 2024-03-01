const createProducto = require("../../controllers/Productos/createProduct");

const HandlersCreateProductos = async (req, res) => {
  try {
    const { title, description, price, img, type, puntos } = req.body;
    const newProduct = await createProducto(
      title,
      description,
      price,
      img,
      type,
      puntos
    );
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = HandlersCreateProductos;
