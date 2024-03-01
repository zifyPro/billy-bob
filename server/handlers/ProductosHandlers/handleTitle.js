const ProductTitle = require("../../controllers/Productos/productosByName");

const TitleHandlersProduct = async (req, res) => {
  try {
    const { title } = req.query;
    const newProduct = await ProductTitle(title);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = TitleHandlersProduct;
