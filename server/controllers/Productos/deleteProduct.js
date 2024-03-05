const { Productos } = require("../../db");

const DeleteProduct = async (id) => {
  const deletedProduct = await Productos.destroy({
    where: { id: id },
  });
  return deletedProduct;
};
module.exports = DeleteProduct;
