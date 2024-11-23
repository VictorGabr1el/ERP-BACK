// // routes.js
import express from "express";

import acertosRouter from "./settlements.js";
import authRouter from "./auth.js";
import userRouter from "./user.js";
import agreementsInstallmentsRouter from "./agreementsInstallments.js";
import settementRouter from "./settlements.js";
import agreementRouter from "./Agreements.js";
import agreementsNegotiationRouter from "./agreementsNegotiation.js";
import settlementsInstallmentsRouter from "./settlementsInstallments.js";
import settlementsNegotiationsRouter from "./settlementsNegotiation.js";
import salesRouter from "./salesRoutes.js";
import itemStockRouter from "./itemStockRoutes.js";
import inventoryRouter from "./inventoryRoutes.js";
import inventoryItemsRouter from "./inventoryItemsRoutes.js";
import stockRouter from "./stockRouter.js";

// import {
//   createItem,
//   getAllItems,
//   getItemByCode,
//   updateItem,
//   deleteItem,
// } from "../controllers/itemController.js";

// import {
//   createItemEstoque,
//   getAllItemsEstoque,
//   getItemEstoqueById,
//   updateItemEstoque,
//   deleteItemEstoque,
// } from "../controllers/itemEstoqueController.js";

const routesRouter = express.Router();

// // Rotas para Item
// routesRouter.post("/items", createItem);
// routesRouter.get("/items", getAllItems);
// routesRouter.get("/items/:code", getItemByCode);
// routesRouter.put("/items/:code", updateItem);
// routesRouter.delete("/items/:code", deleteItem);

// // Rotas para ItemEstoque
// routesRouter.post("/items-estoque", createItemEstoque);
// routesRouter.get("/items-estoque", getAllItemsEstoque);
// routesRouter.get("/items-estoque/:item/:loja", getItemEstoqueById);
// routesRouter.put("/items-estoque/:item/:loja", updateItemEstoque);
// routesRouter.delete("/items-estoque/:item/:loja", deleteItemEstoque);

// export default routesRouter;

export {
  acertosRouter,
  authRouter,
  userRouter,
  agreementRouter,
  agreementsInstallmentsRouter,
  agreementsNegotiationRouter,
  acertosRouter,
  settementRouter,
  settlementsInstallmentsRouter,
  settlementsNegotiationsRouter,
  salesRouter,
  itemStockRouter,
  inventoryRouter,
  inventoryItemsRouter,
  stockRouter,
};
