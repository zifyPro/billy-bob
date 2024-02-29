require("dotenv").config();
const { Productos } = require("../../db");

const getProduct = async () => {
  const NewProduct = await Productos.findAll();
  return NewProduct;
};
module.exports = getProduct;
