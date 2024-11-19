// routes/stock.js

import express from "express";
import { moveStock } from "../services/StockMovementService";

const router = express.Router();

router.post("/move", async (req, res) => {
  const { itemId, storeId, quantityChange } = req.body;

  try {
    const result = await moveStock(itemId, storeId, quantityChange);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
