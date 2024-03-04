require("dotenv").config();
const { Productos } = require("../../db");

const getProduct = async () => {
  const newProduct = await Productos.findAll();
  const response = newProduct.map((product) => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      img: product.img,
      price: product.price,
      type: product.type,
      puntos: product.puntos,
    };
  });
  return response;
};
module.exports = getProduct;
