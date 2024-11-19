// routes/itemStockRoutes.js
import express from "express";
import {
  createItemStock,
  getItemStocks,
  getItemStockById,
  updateItemStock,
  deleteItemStock,
} from "../controllers/itemStockController.js";
import itemStockValidator from "../validators/itemStockValidator.js";

const itemStockRouter = express.Router();

itemStockRouter
  .route("/")
  .get(getItemStocks)
  .post(itemStockValidator, createItemStock);

itemStockRouter
  .route("/:id")
  .get(getItemStockById)
  .put(itemStockValidator, updateItemStock)
  .delete(deleteItemStock);

export default itemStockRouter;
