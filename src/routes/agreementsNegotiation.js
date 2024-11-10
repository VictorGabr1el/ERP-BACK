import express from "express";
import {
  createAgreementNegotiation,
  deleteAgreementNegotiation,
  getAllAgreementsNegotiation,
  updateAgreementNegotiation,
} from "../controllers/agreementsNegotiationController.js";
import { agreementNegotiationValidator } from "../middlewares/agreementsNegotiationValidator.js";

const agreementsNegotiationRouter = express.Router();

agreementsNegotiationRouter.get("/", getAllAgreementsNegotiation);
agreementsNegotiationRouter.post(
  "/:id",
  agreementNegotiationValidator,
  createAgreementNegotiation
);
agreementsNegotiationRouter.put(
  "/:id",
  agreementNegotiationValidator,
  updateAgreementNegotiation
);
agreementsNegotiationRouter.delete("/:id", deleteAgreementNegotiation);

export default agreementsNegotiationRouter;
