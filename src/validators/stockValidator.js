import { body, validationResult } from "express-validator";

const validateStockPayload = [
  body("itemId").isInt().withMessage("itemId must be an integer."),
  body("storeId").isInt().withMessage("storeId must be an integer."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default validateStockPayload;
