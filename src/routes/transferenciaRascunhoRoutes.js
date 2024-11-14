// routes/transferenciaRascunhoRoutes.js
import express from "express";
import {
  criarRascunho,
  atualizarRascunho,
} from "../controllers/transferenciaRascunhoController.js";

const transferenciaRascunhoRouter = express.Router();

// Rota para criar um novo rascunho
transferenciaRascunhoRouter.post("/", criarRascunho);

// Rota para atualizar um rascunho existente
transferenciaRascunhoRouter.put("/:id", atualizarRascunho);

export default transferenciaRascunhoRouter;
