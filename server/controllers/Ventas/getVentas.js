require("dotenv").config();
const { Ventas } = require("../../db");

const GetVentas = async () => {
  const newVenta = await Ventas.findAll();
  return newVenta;
};
module.exports = GetVentas;
