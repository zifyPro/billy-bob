// userRoutes.js
const express = require("express");
const { Router } = require("express");
const getAllProduct = require("../handlers/HandlresProductos");

const mainRouter = Router();

mainRouter.get("/Productos", getAllProduct);

module.exports = mainRouter;
