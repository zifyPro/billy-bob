const { Productos } = require("../../db");

const DeleteProduct = async () => {
  const deletedProduct = await Productos.delete({
    where: { id: data.id },
  });
  return deletedProduct;
};
module.exports = DeleteProduct;
