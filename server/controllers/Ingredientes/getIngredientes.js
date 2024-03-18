const { Ingredientes } = require("../../db");

const getIngredientes = async () => {
  const response = await Ingredientes.findAll();
  const result = response.map((elem) => {
    return {
      id: elem.id,
      nombre: elem.nombre,
      cantidad: elem.cantidad,
      img: elem.img,
    };
  });
  return result;
};
module.exports = getIngredientes;
