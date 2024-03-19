const CreateVentas = require("../../controllers/Ventas/createVentas");

const HandlersCreateVentas = async (req, res) => {
  try {
    console.log("jony ptoooooooo", req.body);
    const { nombre, direccion, telefono, estadoDeProducto, ingredientes } =
      req.body;
    const newVentas = await CreateVentas(
      nombre,
      direccion,
      telefono,
      estadoDeProducto,
      ingredientes
    );
    console.log(newVentas);
    res.status(200).json(newVentas);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = HandlersCreateVentas;
