const UpdateProducto = require("../../controllers/Productos/updateProduct");

const UpdateProductoHandlers = async (req, res) => {
  try {
    const { id, title, description, price, img, type, puntos } = req.body;
    const update = await UpdateProducto(
      id,
      title,
      description,
      price,
      img,
      type,
      puntos
    );
    res.status(200).json(update);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = UpdateProductoHandlers;
