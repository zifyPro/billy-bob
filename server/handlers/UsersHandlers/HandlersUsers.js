const getUsers = require("../../controllers/Usuarios/getUser");

const UsuariosHandlers = async (req, res) => {
  try {
    const newUsers = await getUsers();
    res.status(200).json(newUsers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = UsuariosHandlers;
