// middlewares/validateUser.js
import { body, validationResult } from "express-validator";

export const validateUser = [
  body("store")
    .isLength({ min: 1, max: 3 })
    .withMessage("Store must be between 1 and 3 characters")
    .isString()
    .withMessage("Store must be a string"),

  body("name")
    .isLength({ min: 1, max: 20 })
    .withMessage("Name must be between 1 and 32 characters")
    .isString()
    .withMessage("Name must be a string"),

  body("password")
    .isLength({ min: 8, max: 64 })
    .withMessage("Password must be between 8 and 64 characters")
    .isString()
    .withMessage("Password must be a string"),

  body("admin").optional().isBoolean().withMessage("Admin must be a boolean"),

  body("cashier")
    .optional()
    .isBoolean()
    .withMessage("Cashier must be a boolean"),

  body("initial_screen")
    .optional()
    .isBoolean()
    .withMessage("Initial screen must be a boolean"),

  body("active").isBoolean().withMessage("Active must be a boolean"),

  body("group")
    .isLength({ min: 1, max: 2 })
    .withMessage("Group must be between 1 and 2 characters")
    .isString()
    .withMessage("Group must be a string"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
