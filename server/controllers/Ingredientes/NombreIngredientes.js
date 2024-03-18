const { Ingredientes } = require("../../db");
const { Op } = require("sequelize");

const byNameIngredientes = async (nombre) => {
  const response = await Ingredientes.findAll({
    where: { nombre: { [Op.iLike]: `%${nombre}%` } },
  });

  const result = response.map((elem) => {
    return {
      nombre: elem.nombre,
      cantidad: elem.cantidad,
      img: elem.img,
    };
  });
  return result;
};
module.exports = byNameIngredientes;
