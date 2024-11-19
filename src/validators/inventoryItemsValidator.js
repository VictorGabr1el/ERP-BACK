// validators/inventoryItemsValidator.js
import { body } from "express-validator";

const inventoryItemsValidator = [
  body("item").isInt().withMessage("Item must be an integer."),
  body("inventory").isInt().withMessage("Inventory must be an integer."),
  body("store").isInt().withMessage("Store must be an integer."),
  body("currentStock")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Current stock must be a positive number."),
  body("foundStock")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Found stock must be a positive number."),
  body("entryExit")
    .isIn(["E", "S"]) // Adapte os valores válidos conforme necessário (E: entrada, S: saída)
    .withMessage("Entry/Exit must be a valid character (E or S)."),
  body("inventoryQuantity")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Inventory quantity must be a positive number."),
  body("previousBalance")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Previous balance must be a positive number."),
  body("itemType")
    .optional()
    .isIn(["A", "B", "C"]) // Adapte os tipos válidos conforme necessário
    .withMessage("Item type must be a valid character."),
];

export default inventoryItemsValidator;
