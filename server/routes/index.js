// userRoutes.js
const express = require("express");
const { Router } = require("express");
const getAllProduct = require("../handlers/ProductosHandlers/HandlresProductos");
const UsuariosHandlers = require("../handlers/UsersHandlers/HandlersUsers");
const ProductDelete = require("../handlers/ProductosHandlers/HandlersDelete");
const HandlersCreateProductos = require("../handlers/ProductosHandlers/handlersCreate");
const HandlersById = require("../handlers/ProductosHandlers/HandlersById");

const mainRouter = Router();

mainRouter.get("/Productos/:id", HandlersById);
mainRouter.get("/Productos", getAllProduct);
mainRouter.post("/Productos", HandlersCreateProductos);
mainRouter.delete("/Productos/delete", ProductDelete);
mainRouter.get("/Usuarios", UsuariosHandlers);

module.exports = mainRouter;
