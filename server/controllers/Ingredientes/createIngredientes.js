const { Ingredientes } = require("../../db");

const CreateIngredientes = async ({ nombre, cantidad, img }) => {
  const response = await Ingredientes.create({
    nombre,
    cantidad,
    img,
  });
  return response;
};
module.exports = CreateIngredientes;
