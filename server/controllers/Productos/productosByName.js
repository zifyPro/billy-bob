const { Op } = require("sequelize");
const { Productos } = require("../../db");

const ProductTitle = async (title) => {
  const productDb = await Productos.findAll({
    where: { title: { [Op.iLike]: `%${title}%` } },
  });
  const newproduct = productDb.map((product) => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      img: product.img,
      type: product.type,
      puntos: product.puntos,
    };
  });

  return newproduct;
};
module.exports = ProductTitle;
