// validators/salesValidator.js
import { body } from "express-validator";

const salesValidator = [
  body("code")
    .isString()
    .isLength({ max: 8 })
    .withMessage("Code must be a string with a maximum of 8 characters."),
  body("store").isInt().withMessage("Store must be an integer."),
  body("date")
    .isISO8601()
    .withMessage("Date must be in a valid ISO 8601 format."),
  body("condition")
    .isString()
    .isLength({ max: 1 })
    .withMessage("Condition must be a string with a maximum of 1 character."),
  body("seller").optional().isInt().withMessage("Seller must be an integer."),
  body("client").optional().isInt().withMessage("Client must be an integer."),
  body("receipt")
    .optional()
    .isString()
    .isLength({ max: 9 })
    .withMessage("Receipt must be a string with a maximum of 9 characters."),
  body("discountValue")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Discount value must be a positive number."),
  body("totalSale")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Total sale must be a positive number."),
  body("sent").isBoolean().withMessage("Sent must be a boolean."),
  body("printed").isBoolean().withMessage("Printed must be a boolean."),
  body("paymentMethod")
    .optional()
    .isString()
    .isLength({ max: 120 })
    .withMessage(
      "Payment method must be a string with a maximum of 120 characters."
    ),
  body("receivedChange")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Received change must be a positive number."),
  body("changeValue")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Change value must be a positive number."),
];

export default salesValidator;
