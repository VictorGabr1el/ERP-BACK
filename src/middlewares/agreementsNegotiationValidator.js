// validators/agreementsNegotiationValidator.js
import { body } from "express-validator";

export const agreementNegotiationValidator = [
  body("code")
    .isLength({ min: 1, max: 8 })
    .withMessage("Code is required and should be max 8 characters"),
  body("store")
    .isDecimal({ decimal_digits: "0,3" })
    .withMessage("Store must be a decimal with up to 3 digits"),
  body("installment")
    .isLength({ min: 1, max: 20 })
    .withMessage("Installment is required and should be max 20 characters"),
  body("dueDate").isDate().withMessage("Due date must be a valid date"),
  body("value")
    .isDecimal({ decimal_digits: "0,2" })
    .withMessage("Value must be a decimal with up to 2 decimal places"),
  body("receiptDate")
    .optional()
    .isDate()
    .withMessage("Receipt date must be a valid date if provided"),
];
