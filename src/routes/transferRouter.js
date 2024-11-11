// /routes/transferRoutes.js

import { validationResult } from "express-validator";
import { validateTransfer } from "../validators/transferValidator";
import express from "express";
import {
  cancelTransfer,
  createTransfer,
  getAllTransfers,
  updateTransfer,
} from "../controllers/transferController.js";

// Middleware para verificar erros de validação
const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const transferRouter = express.Router();

// Rotas
transferRouter.get("/", getAllTransfers);
transferRouter.post("/", validateTransfer, checkValidation, createTransfer);
transferRouter.put(
  "/:codigo",
  validateTransfer,
  checkValidation,
  updateTransfer
);
transferRouter.delete("/:codigo", cancelTransfer);

export default transferRouter;
