// routes/itemsRouter.js
import express from "express";
import {
  getAllItems,
  getByPkItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemsController.js";

import { itemValidator } from "../middlewares/itemsValidator.js";

const router = express.Router();

router.get("/", getAllItems);
router.get("/:id", getByPkItem);
router.post("/", itemValidator, createItem);
router.put("/:id", itemValidator, updateItem);
router.delete("/:id", deleteItem);

export default router;
