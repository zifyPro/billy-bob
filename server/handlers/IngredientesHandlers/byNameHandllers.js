const byNameIngredientes = require("../../controllers/Ingredientes/NombreIngredientes");

const byNameIngHandlers = async (req, res) => {
  try {
    const { nombre } = req.query;
    const result = await byNameIngredientes(nombre);
    res.status(200).send(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = byNameIngHandlers;
