const { Productos } = require("../../db");

const getProductById = async (id) => {
  const productoDb = [await Productos.findByPk(id)];
  const newproducto = productoDb.map((producto) => {
    return {
      id: producto.id,
      title: producto.title,
      description: producto.description,
      price: producto.price,
      img: producto.img,
      type: producto.type,
      puntos: producto.puntos,
    };
  });
  return newproducto[0];
};
module.exports = getProductById;
