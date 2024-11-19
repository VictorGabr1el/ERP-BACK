// validators/inventoryValidator.js
import { body } from "express-validator";

const inventoryValidator = [
  body("code")
    .isString()
    .isLength({ max: 8 })
    .withMessage("Code must be a string with a maximum length of 8."),
  body("store").isInt().withMessage("Store must be an integer."),
  body("type")
    .isIn(["A", "B", "C"]) // Adapte os tipos válidos conforme sua regra de negócio
    .withMessage("Type must be a valid character."),
  body("date").isISO8601().toDate().withMessage("Date must be a valid date."),
  body("user")
    .isString()
    .isLength({ max: 2 })
    .withMessage("User must be a string with a maximum length of 2."),
  body("time")
    .matches(/^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)
    .withMessage("Time must be a valid time in HH:MM:SS format."),
  body("itemQuantity")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Item quantity must be a positive number."),
  body("status")
    .isIn(["A", "I", "C"]) // Adapte os status válidos conforme sua regra de negócio
    .withMessage("Status must be a valid character."),
  body("cancellationReason")
    .optional()
    .isLength({ max: 80 })
    .withMessage(
      "Cancellation reason must be a string with a maximum length of 80."
    ),
  body("observation")
    .optional()
    .isLength({ max: 160 })
    .withMessage("Observation must be a string with a maximum length of 160."),
];

export default inventoryValidator;
