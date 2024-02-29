// userRoutes.js
const express = require("express");
const { Router } = require("express");
const getAllProduct = require("../handlers/ProductosHandlers/HandlresProductos");
const UsuariosHandlers = require("../handlers/UsersHandlers/HandlersUsers");

const mainRouter = Router();

mainRouter.get("/Productos", getAllProduct);
mainRouter.get("/Usuarios", UsuariosHandlers);

module.exports = mainRouter;
