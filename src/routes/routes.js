// routes.js
import express from "express";
import {
  createItem,
  getAllItems,
  getItemByCode,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";

import {
  createItemEstoque,
  getAllItemsEstoque,
  getItemEstoqueById,
  updateItemEstoque,
  deleteItemEstoque,
} from "../controllers/itemEstoqueController.js";

const routesRouter = express.Router();

// Rotas para Item
routesRouter.post("/items", createItem);
routesRouter.get("/items", getAllItems);
routesRouter.get("/items/:code", getItemByCode);
routesRouter.put("/items/:code", updateItem);
routesRouter.delete("/items/:code", deleteItem);

// Rotas para ItemEstoque
routesRouter.post("/items-estoque", createItemEstoque);
routesRouter.get("/items-estoque", getAllItemsEstoque);
routesRouter.get("/items-estoque/:item/:loja", getItemEstoqueById);
routesRouter.put("/items-estoque/:item/:loja", updateItemEstoque);
routesRouter.delete("/items-estoque/:item/:loja", deleteItemEstoque);

export default routesRouter;
