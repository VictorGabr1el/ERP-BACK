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

settlementsInstallmentsRouter
  .get("/", getAllSettlementsInstallments)
  .post(createSettlementInstallmentValidator, createSettlementInstallment)

  .put(
    "/:id",
    updateSettlementInstallmentValidator,
    updateSettlementInstallment
  )
  .delete(deleteSettlementInstallment)
  .get(findByPkSettlementInstallment);

export default settlementsInstallmentsRouter;
