// userRoutes.js
const express = require("express");
const { Router } = require("express");
const getAllProduct = require("../handlers/ProductosHandlers/HandlresProductos");
const UsuariosHandlers = require("../handlers/UsersHandlers/HandlersUsers");
const ProductDelete = require("../handlers/ProductosHandlers/HandlersDelete");
const HandlersCreateProductos = require("../handlers/ProductosHandlers/handlersCreate");
const HandlersById = require("../handlers/ProductosHandlers/HandlersById");
const TitleHandlersProduct = require("../handlers/ProductosHandlers/handleTitle");
const HandlersCreateVentas = require("../handlers/VentasHandlers/HandlersCreate");
const HandlersIdVentas = require("../handlers/VentasHandlers/HandlersById");
const HandlersUpdateVentas = require("../handlers/VentasHandlers/HandlersUpdate");
const HandlersVentas = require("../handlers/VentasHandlers/HandlersVentas");
const UpdateProductoHandlers = require("../handlers/ProductosHandlers/HandlersProductosUpdate");
const getIngredientesHandlers = require("../handlers/IngredientesHandlers/getHandlers");
const byNameIngHandlers = require("../handlers/IngredientesHandlers/byNameHandllers");
const PostHandlers = require("../handlers/IngredientesHandlers/createHandlers");

const mainRouter = Router();

mainRouter.get("/Productos/:id", HandlersById);
mainRouter.get("/Productos/?title", TitleHandlersProduct);
mainRouter.get("/Productos", getAllProduct);
mainRouter.put("/Productos/update", UpdateProductoHandlers);
mainRouter.post("/Productos", HandlersCreateProductos);
mainRouter.delete("/Productos/delete", ProductDelete);

mainRouter.get("/Ingredientes/?nombre", byNameIngHandlers);
mainRouter.get("/Ingredientes", getIngredientesHandlers);
mainRouter.post("/Ingredientes", PostHandlers);

mainRouter.get("/Usuarios", UsuariosHandlers);

mainRouter.get("/Ventas/:id", HandlersIdVentas);
mainRouter.get("/Ventas", HandlersVentas);
mainRouter.post("/Ventas", HandlersCreateVentas);
mainRouter.put("/Ventas", HandlersUpdateVentas);

module.exports = mainRouter;
