const CreateIngredientes = require("../../controllers/Ingredientes/createIngredientes");

const PostHandlers = async (req, res) => {
  try {
    const { nombre, cantidad, img } = req.body;
    const response = await CreateIngredientes(nombre, cantidad, img);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = PostHandlers;
