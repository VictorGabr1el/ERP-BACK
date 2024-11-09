// middlewares/validateSettlement.js
import { body, validationResult } from "express-validator";

export const validateSettlement = [
  body("code")
    .notEmpty()
    .withMessage("Code is required")
    .isString()
    .withMessage("Code must be a string"),

  body("store")
    .notEmpty()
    .withMessage("Store is required")
    .isString()
    .withMessage("Store must be a string"),

  body("status")
    .optional()
    .isString()
    .withMessage("Status must be a single character"),

  body("discount")
    .optional()
    .isFloat()
    .withMessage("Discount must be a decimal number"),

  body("total")
    .optional()
    .isFloat()
    .withMessage("Total must be a decimal number"),

  body("note").optional().isString().withMessage("Note must be a string"),

  body("sale").optional().isString().withMessage("Sale must be a string"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
