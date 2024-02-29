require("dotenv").config();
const { Usuarios } = require("../../db");

const getUsers = async () => {
  const Newusers = await Usuarios.findAll();
  return Newusers;
};
module.exports = getUsers;
