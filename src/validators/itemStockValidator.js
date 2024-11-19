// validators/itemStockValidator.js
import { body } from "express-validator";

const itemStockValidator = [
  body("item").isInt().withMessage("Item must be an integer."),
  body("store").isInt().withMessage("Store must be an integer."),
  body("stock")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Stock must be a positive number."),
  body("maxStock")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Max stock must be a positive number."),
  body("minStock")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Min stock must be a positive number."),
  body("location")
    .optional()
    .isString()
    .isLength({ max: 20 })
    .withMessage("Location must be a string with a maximum of 20 characters."),
  body("accountingStock")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Accounting stock must be a positive number."),
  body("replacementRate")
    .optional()
    .isInt()
    .withMessage("Replacement rate must be an integer."),
];

export default itemStockValidator;
