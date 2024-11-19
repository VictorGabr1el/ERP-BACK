// routes/inventoryRoutes.js
import express from "express";
import {
  createInventory,
  getInventories,
  getInventoryById,
  updateInventory,
  deleteInventory,
} from "../controllers/inventoryController.js";
import inventoryValidator from "../validators/inventoryValidator.js";

const inventoryRouter = express.Router();

inventoryRouter
  .route("/")
  .get(getInventories)
  .post(inventoryValidator, createInventory);

inventoryRouter
  .route("/:id")
  .get(getInventoryById)
  .put(inventoryValidator, updateInventory)
  .delete(deleteInventory);

export default inventoryRouter;
