import express from "express";
import {
  createAgreementInstallment,
  deleteAgreementInstallments,
  getAllAgreementsInstallments,
  updateAgreementInstallment,
} from "../controllers/agreementsInstallmentsController.js";
import { agreementNegotiationValidator } from "../middlewares/agreementsNegotiationValidator.js";

const agreementsInstallmentsRouter = express.Router();

agreementsInstallmentsRouter.get("/", getAllAgreementsInstallments);
agreementsInstallmentsRouter.post(
  "/",
  agreementNegotiationValidator,
  createAgreementInstallment
);
agreementsInstallmentsRouter.put(
  "/:id",
  agreementNegotiationValidator,
  updateAgreementInstallment
);
agreementsInstallmentsRouter.delete("/:id", deleteAgreementInstallments);

export default agreementsInstallmentsRouter;
