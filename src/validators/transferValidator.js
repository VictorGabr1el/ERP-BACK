// /validators/transferValidator.js
import { body } from "express-validator";

export const validateTransfer = [
  body("codigo").isLength({ min: 1 }).withMessage("Código é obrigatório"),
  body("loja").isLength({ min: 1 }).withMessage("Loja de origem é obrigatória"),
  body("loja_destino")
    .isLength({ min: 1 })
    .withMessage("Loja de destino é obrigatória"),
  body("cliente").isLength({ min: 1 }).withMessage("Cliente é obrigatório"),
  body("data").isDate().withMessage("Data deve ser válida"),
  body("qtd_itens")
    .isNumeric()
    .withMessage("Quantidade de itens deve ser numérica"),
  body("tot_saida").isNumeric().withMessage("Total de saída deve ser numérico"),
];
