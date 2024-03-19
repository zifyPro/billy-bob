const { Productos, Ingredientes } = require("../../db");

const createProducto = async (
  title,
  description,
  price,
  img,
  type,
  puntos,
  ingredientes
) => {
  const response = await Productos.create({
    title,
    description,
    price,
    img,
    type,
    puntos,
  });

  ingredientes.map(async (type) => {
    const newResponse = await Ingredientes.findAll({
      where: { nombre: type },
    });
    await response.addIngredientes(newResponse);
  });

  return response;
};
module.exports = createProducto;
