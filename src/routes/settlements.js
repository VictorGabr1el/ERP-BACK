// routes/settlements.js
import express from "express";
import {
  createSettlement,
  getSettlements,
  getSettlementById,
  updateSettlement,
  deleteSettlement,
} from "../controllers/settlementController.js";
import { validateSettlement } from "../middlewares/validateSettlement.js";

const router = express.Router();

router.post("/", validateSettlement, createSettlement);
router.get("/", getSettlements);
router.get("/:id", getSettlementById);
router.put("/:id", validateSettlement, updateSettlement);
router.delete("/:id", deleteSettlement);

export default router;
