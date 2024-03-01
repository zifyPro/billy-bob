const { Productos } = require("../../db");

const UpdateProducto = async (
  id,
  title,
  description,
  price,
  img,
  type,
  puntos
) => {
  const response = await Productos.put(
    { where: { id: id } },
    {
      title,
      description,
      price,
      img,
      type,
      puntos,
    }
  );
  return response;
};
module.exports = UpdateProducto;
