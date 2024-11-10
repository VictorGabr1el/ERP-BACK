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

settementRouter.post("/", settlementValidator, createSettlement);
settementRouter.get("/", getAllSettlements);
settementRouter.get("/:id", getSettlementById);
settementRouter.put("/:id", settlementValidator, updateSettlement);
settementRouter.delete("/:id", deleteSettlement);

export default settementRouter;
