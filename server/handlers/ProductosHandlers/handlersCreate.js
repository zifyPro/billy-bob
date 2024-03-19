const createProducto = require("../../controllers/Productos/createProduct");

const HandlersCreateProductos = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      img,
      type,
      puntos,
      ingredientes,
      tipoDePago,
      compraRealizada,
    } = req.body;
    const newProduct = await createProducto(
      title,
      description,
      price,
      img,
      type,
      puntos,
      ingredientes,
      compraRealizada,
      tipoDePago
    );
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = HandlersCreateProductos;
