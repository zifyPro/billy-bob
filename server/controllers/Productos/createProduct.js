const { Productos } = require("../../db");

const createProducto = async () => {
  const response = await Productos.create({ data });
  return response;
};
module.exports = createProducto;
