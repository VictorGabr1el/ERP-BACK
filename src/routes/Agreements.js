// routes/agreementsRoutes.js
import express from "express";
import {
  getAllAgreements,
  createAgreement,
  updateAgreement,
  deleteAgreement,
} from "../controllers/agreementsController.js";
import { agreementValidator } from "../middlewares/agreementsValidator.js";

const agreementRouter = express.Router();

agreementRouter.get("/", getAllAgreements);
agreementRouter.post("/", agreementValidator, createAgreement);
agreementRouter.put("/:id", agreementValidator, updateAgreement);
agreementRouter.delete("/:id", deleteAgreement);

export default agreementRouter;
