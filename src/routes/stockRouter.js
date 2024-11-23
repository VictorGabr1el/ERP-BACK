// routes/stock.js

import express from "express";
import StockController from "../controllers/stockController.js";

const stockRouter = express.Router();

stockRouter.post("/move", StockController.moveStock);
stockRouter.post(
  "/validate-stock-discrepancy",
  StockController.validateStockDiscrepancy
);

export default stockRouter;
