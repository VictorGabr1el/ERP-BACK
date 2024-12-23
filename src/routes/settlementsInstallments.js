// routes/settlements_installmentsRoutes.js
import express from "express";
import {
  getAllSettlementsInstallments,
  findByPkSettlementInstallment,
  createSettlementInstallment,
  updateSettlementInstallment,
  deleteSettlementInstallment,
} from "../controllers/settlementsInstallmentsController.js";
import {
  createSettlementInstallmentValidator,
  updateSettlementInstallmentValidator,
} from "../Middlewares/settlementsInstallmentsValidator.js";

const settlementsInstallmentsRouter = express.Router();

settlementsInstallmentsRouter.get("/", getAllSettlementsInstallments);
settlementsInstallmentsRouter.post(
  "/",
  createSettlementInstallmentValidator,
  createSettlementInstallment
);

settlementsInstallmentsRouter.put(
  "/:id",
  updateSettlementInstallmentValidator,
  updateSettlementInstallment
);
settlementsInstallmentsRouter.delete("/:id", deleteSettlementInstallment);
settlementsInstallmentsRouter.get("/:id", findByPkSettlementInstallment);

export default settlementsInstallmentsRouter;
