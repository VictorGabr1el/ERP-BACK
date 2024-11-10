// validators/agreementsValidator.js
import { body } from "express-validator";

export const agreementValidator = [
  body("code")
    .isLength({ min: 1, max: 8 })
    .withMessage("Code is required and should be max 8 characters"),
  body("store")
    .isDecimal({ decimal_digits: "0,3" })
    .withMessage("Store must be a decimal with up to 3 digits"),
  body("date").isDate().withMessage("Date must be a valid date"),
  body("status").isIn(["A", "I"]).withMessage("Status must be A or I"),
  body("discount")
    .optional()
    .isDecimal({ decimal_digits: "0,2" })
    .withMessage("Discount must be a decimal with up to 2 decimal places"),
  body("client")
    .isLength({ min: 1, max: 5 })
    .withMessage("Client is required and should be max 5 characters"),
  body("sale")
    .optional()
    .isLength({ max: 8 })
    .withMessage("Sale should be max 8 characters"),
];
