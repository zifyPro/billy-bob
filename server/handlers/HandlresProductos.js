const { default: getProduct } = require("../controllers/getProductos");

const getAllProduct = async (req, res) => {
  try {
    const NewProduct = await getProduct;
    res.status(200).send(NewProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = getAllProduct;
