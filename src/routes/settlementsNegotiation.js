// routes/settlements_negotiationRoutes.js
import express from "express";
import {
  getAllSettlementsNegotiation,
  createSettlementNegotiation,
  updateSettlementNegotiation,
  deleteSettlementNegotiation,
} from "../controllers/settlementsNegotiationController.js";
import {
  createSettlementNegotiationValidator,
  updateSettlementNegotiationValidator,
} from "../middlewares/settlementsNegotiationValidator.js";

const settlementsNegotiationsRouter = express.Router();

settlementsNegotiationsRouter.get("/", getAllSettlementsNegotiation);
settlementsNegotiationsRouter.post(
  "/:id",
  createSettlementNegotiationValidator,
  createSettlementNegotiation
);
settlementsNegotiationsRouter.put(
  "/:id",
  updateSettlementNegotiationValidator,
  updateSettlementNegotiation
);
settlementsNegotiationsRouter.delete("/:id", deleteSettlementNegotiation);

export default settlementsNegotiationsRouter;
