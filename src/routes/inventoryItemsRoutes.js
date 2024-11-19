// routes/inventoryItemsRoutes.js
import express from "express";
import {
  createInventoryItem,
  getInventoryItems,
  getInventoryItemById,
  updateInventoryItem,
  deleteInventoryItem,
} from "../controllers/inventoryItemsController.js";
import inventoryItemsValidator from "../validators/inventoryItemsValidator.js";

const inventoryItemsRouter = express.Router();

inventoryItemsRouter
  .route("/")
  .get(getInventoryItems)
  .post(inventoryItemsValidator, createInventoryItem);

inventoryItemsRouter
  .route("/:id")
  .get(getInventoryItemById)
  .put(inventoryItemsValidator, updateInventoryItem)
  .delete(deleteInventoryItem);

export default inventoryItemsRouter;
