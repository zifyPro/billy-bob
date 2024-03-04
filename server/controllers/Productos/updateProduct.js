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
  const [rowsUpdate, [updatedProduct]] = await Productos.update(
    {
      title,
      description,
      price,
      img,
      type,
      puntos,
    },
    {
      where: { id: id },
      returning: true, // Esto hace que el método 'update' devuelva el producto actualizado
    }
  );

  if (rowsUpdate === 0) {
    return { error: "No se encontró el producto con el id especificado" };
  }

  return updatedProduct;
};
module.exports = UpdateProducto;
