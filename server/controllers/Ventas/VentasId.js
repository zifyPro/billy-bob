const { Ventas } = require("../../db");

const getVentasById = async (id) => {
  const ventasDb = [await Ventas.findByPk(id)];
  const response = ventasDb.map((elemt) => {
    return {
      id: elemt.id,
      title: elemt.title,
      description: elemt.description,
      price: elemt.price,
      img: elemt.img,
      type: elemt.type,
      puntos: elemt.puntos,
    };
  });
  return response[0];
};
module.exports = getVentasById;
