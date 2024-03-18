const getIngredientes = require("../../controllers/Ingredientes/getIngredientes");

const getIngredientesHandlers = async (req, res) => {
  try {
    const newResponse = await getIngredientes();
    res.status(200).json(newResponse);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = getIngredientesHandlers;
