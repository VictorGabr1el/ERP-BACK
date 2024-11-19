// routes/settlements.js
import express from "express";
import {
  createSettlement,
  getAllSettlements,
  getSettlementById,
  updateSettlement,
  deleteSettlement,
} from "../controllers/settlementController.js";
import { settlementValidator } from "../middlewares/validateSettlement.js";

const settementRouter = express.Router();

settementRouter
  .post("/", settlementValidator, createSettlement)
  .get(getAllSettlements);
settementRouter
  .get("/:id", getSettlementById)
  .put(settlementValidator, updateSettlement)
  .delete(deleteSettlement);

export default settementRouter;
