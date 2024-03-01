const { Productos } = require("../../db");

const createProducto = async (title, description, price, img, type, puntos) => {
  const response = await Productos.create({
    title,
    description,
    price,
    img,
    type,
    puntos,
  });
  return response;
};
module.exports = createProducto;
