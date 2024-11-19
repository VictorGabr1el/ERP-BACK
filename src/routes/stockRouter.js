import { Router } from "express";
import stockController from "../controllers/stockController.js";
import stockValidator from "../validators/stockValidator.js";

const router = Router();

router.post(
  "/validate-discrepancy",
  stockValidator.validateStockPayload,
  stockController.validateStockDiscrepancy
);

export default router;
