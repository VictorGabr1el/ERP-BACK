// validators/itemsValidator.js
import { body, validationResult } from "express-validator";

export const itemValidator = [
  body("barcode")
    .optional()
    .isDecimal({ decimal_digits: "0,13" })
    .withMessage("Barcode must be a decimal with up to 13 digits"),
  body("description")
    .isLength({ min: 1, max: 120 })
    .withMessage("Description is required and should be max 120 characters"),
  body("ipi")
    .optional()
    .isDecimal({ decimal_digits: "0,2" })
    .withMessage("IPI must be a decimal with up to 2 decimal places"),
  body("reference")
    .optional()
    .isLength({ max: 60 })
    .withMessage("Reference must be max 60 characters"),
  body("application")
    .optional()
    .isLength({ max: 80 })
    .withMessage("Application must be max 80 characters"),
  body("volume")
    .optional()
    .isDecimal({ decimal_digits: "0,2" })
    .withMessage("Volume must be a decimal with up to 2 decimal places"),
  body("classification")
    .optional()
    .isLength({ max: 4 })
    .withMessage("Classification must be max 4 characters"),
  body("active").optional().isBoolean().withMessage("Active must be a boolean"),
  body("manufacturerCode")
    .optional()
    .isLength({ max: 20 })
    .withMessage("Manufacturer code must be max 20 characters"),
  body("photo")
    .optional()
    .isLength({ max: 32 })
    .withMessage("Photo must be max 32 characters"),
  body("subGroup")
    .optional()
    .isDecimal({ decimal_digits: "0,4" })
    .withMessage("Sub group must be a decimal with up to 4 digits"),
  body("group")
    .optional()
    .isDecimal({ decimal_digits: "0,4" })
    .withMessage("Group must be a decimal with up to 4 digits"),
  body("unit")
    .optional()
    .isLength({ max: 2 })
    .withMessage("Unit must be max 2 characters"),
  body("color")
    .optional()
    .isLength({ max: 4 })
    .withMessage("Color must be max 4 characters"),
  body("product")
    .optional()
    .isLength({ max: 4 })
    .withMessage("Product must be max 4 characters"),
  body("packaging")
    .optional()
    .isLength({ max: 4 })
    .withMessage("Packaging must be max 4 characters"),
  body("brand")
    .optional()
    .isLength({ max: 4 })
    .withMessage("Brand must be max 4 characters"),
  body("model")
    .optional()
    .isLength({ max: 4 })
    .withMessage("Model must be max 4 characters"),
  body("rate")
    .optional()
    .isLength({ max: 2 })
    .withMessage("Rate must be max 2 characters"),
  body("supplier")
    .optional()
    .isLength({ max: 4 })
    .withMessage("Supplier must be max 4 characters"),
  body("service")
    .optional()
    .isBoolean()
    .withMessage("Service must be a boolean"),
  body("cmsAtSight")
    .optional()
    .isDecimal({ decimal_digits: "0,2" })
    .withMessage("CMS at sight must be a decimal with up to 2 decimal places"),
  body("cmsOnCredit")
    .optional()
    .isDecimal({ decimal_digits: "0,2" })
    .withMessage("CMS on credit must be a decimal with up to 2 decimal places"),
  body("receiptDescription")
    .optional()
    .isLength({ max: 30 })
    .withMessage("Receipt description must be max 30 characters"),
  body("weight")
    .optional()
    .isDecimal({ decimal_digits: "0,3" })
    .withMessage("Weight must be a decimal with up to 3 decimal places"),
  body("packagingCode")
    .optional()
    .isLength({ max: 5 })
    .withMessage("Packaging code must be max 5 characters"),
  body("secondaryRate")
    .optional()
    .isLength({ max: 2 })
    .withMessage("Secondary rate must be max 2 characters"),
  body("used").optional().isBoolean().withMessage("Used must be a boolean"),
  body("useSerial")
    .optional()
    .isBoolean()
    .withMessage("Use serial must be a boolean"),
  body("externalCmsAtSight")
    .optional()
    .isDecimal({ decimal_digits: "0,2" })
    .withMessage(
      "External CMS at sight must be a decimal with up to 2 decimal places"
    ),
  body("externalCmsOnCredit")
    .optional()
    .isDecimal({ decimal_digits: "0,2" })
    .withMessage(
      "External CMS on credit must be a decimal with up to 2 decimal places"
    ),
  body("ncm")
    .optional()
    .isLength({ max: 8 })
    .withMessage("NCM must be max 8 characters"),
  body("partCode")
    .optional()
    .isLength({ max: 8 })
    .withMessage("Part code must be max 8 characters"),
  body("activeIngredient")
    .optional()
    .isLength({ max: 100 })
    .withMessage("Active ingredient must be max 100 characters"),
  body("icmsBaseValue")
    .optional()
    .isDecimal({ decimal_digits: "0,2" })
    .withMessage(
      "ICMS base value must be a decimal with up to 2 decimal places"
    ),
  body("reduction")
    .optional()
    .isDecimal({ decimal_digits: "0,2" })
    .withMessage("Reduction must be a decimal with up to 2 decimal places"),
  body("blockedDiscount")
    .optional()
    .isBoolean()
    .withMessage("Blocked discount must be a boolean"),
  body("lab")
    .optional()
    .isLength({ max: 4 })
    .withMessage("Lab must be max 4 characters"),
  body("dependencyItem")
    .optional()
    .isLength({ max: 5 })
    .withMessage("Dependency item must be max 5 characters"),
  body("purchaseUnit")
    .optional()
    .isLength({ max: 4 })
    .withMessage("Purchase unit must be max 4 characters"),
  body("saleUnit")
    .optional()
    .isLength({ max: 4 })
    .withMessage("Sale unit must be max 4 characters"),
  body("taxableUnit")
    .optional()
    .isLength({ max: 4 })
    .withMessage("Taxable unit must be max 4 characters"),
  body("specificProduct")
    .optional()
    .isInt()
    .withMessage("Specific product must be an integer"),
  body("priceChangeAllowed")
    .optional()
    .isBoolean()
    .withMessage("Price change allowed must be a boolean"),
  body("descriptionChangeAllowed")
    .optional()
    .isBoolean()
    .withMessage("Description change allowed must be a boolean"),
  body("stockControl")
    .optional()
    .isBoolean()
    .withMessage("Stock control must be a boolean"),
  body("additionalInfo")
    .optional()
    .isLength({ max: 200 })
    .withMessage("Additional info must be max 200 characters"),
  body("manufacturer")
    .optional()
    .isLength({ max: 4 })
    .withMessage("Manufacturer must be max 4 characters"),
  body("priceChangePermission")
    .optional()
    .isBoolean()
    .withMessage("Price change permission must be a boolean"),
  body("itemGender")
    .optional()
    .isLength({ max: 2 })
    .withMessage("Item gender must be max 2 characters"),
  body("itemType")
    .optional()
    .isLength({ max: 2 })
    .withMessage("Item type must be max 2 characters"),
  body("hasAssembly")
    .optional()
    .isBoolean()
    .withMessage("Has assembly must be a boolean"),
  body("assemblyPoints")
    .optional()
    .isInt()
    .withMessage("Assembly points must be an integer"),
  body("lastUpdate")
    .optional()
    .isDate()
    .withMessage("Last update must be a date"),
  body("priceGroup")
    .optional()
    .isLength({ max: 5 })
    .withMessage("Price group must be max 5 characters"),
  body("priceGroupDescription")
    .optional()
    .isLength({ max: 40 })
    .withMessage("Price group description must be max 40 characters"),
  body("grossWeight")
    .optional()
    .isDecimal({ decimal_digits: "0,3" })
    .withMessage("Gross weight must be a decimal with up to 3 decimal places"),
  body("spacePriceTable")
    .optional()
    .isInt()
    .withMessage("Space price table must be an integer"),
  body("merchandiseOrigin")
    .optional()
    .isLength({ max: 2 })
    .withMessage("Merchandise origin must be max 2 characters"),
  body("cest")
    .optional()
    .isLength({ max: 7 })
    .withMessage("CEST must be max 7 characters"),
  body("fractional")
    .optional()
    .isBoolean()
    .withMessage("Fractional must be a boolean"),
  body("expirationControl")
    .optional()
    .isBoolean()
    .withMessage("Expiration control must be a boolean"),
  body("purchaseVolume")
    .optional()
    .isDecimal({ decimal_digits: "0,2" })
    .withMessage(
      "Purchase volume must be a decimal with up to 2 decimal places"
    ),
  body("smallScaleCest")
    .optional()
    .isBoolean()
    .withMessage("Small scale CEST must be a boolean"),
  body("supplierCNPJ")
    .optional()
    .isLength({ max: 19 })
    .withMessage("Supplier CNPJ must be max 19 characters"),
  body("scaleLoad")
    .optional()
    .isBoolean()
    .withMessage("Scale load must be a boolean"),
  body("expirationDate")
    .optional()
    .isDate()
    .withMessage("Expiration date must be a date"),
  body("icmsReduction")
    .optional()
    .isDecimal({ decimal_digits: "0,4" })
    .withMessage(
      "ICMS reduction must be a decimal with up to 4 decimal places"
    ),
  body("glgnn")
    .optional()
    .isDecimal({ decimal_digits: "0,4" })
    .withMessage("GLGNN must be a decimal with up to 4 decimal places"),
  body("glgni")
    .optional()
    .isDecimal({ decimal_digits: "0,4" })
    .withMessage("GLGNI must be a decimal with up to 4 decimal places"),
  body("anvisaProductCode")
    .optional()
    .isLength({ max: 13 })
    .withMessage("Anvisa product code must be max 13 characters"),
  body("anvisaExemptionReason")
    .optional()
    .isLength({ max: 255 })
    .withMessage("Anvisa exemption reason must be max 255 characters"),
  body("anvisaMaxPrice")
    .optional()
    .isDecimal({ decimal_digits: "0,2" })
    .withMessage(
      "Anvisa max price must be a decimal with up to 2 decimal places"
    ),
  body("compositionItem")
    .optional()
    .isBoolean()
    .withMessage("Composition item must be a boolean"),
  body("netWeight")
    .optional()
    .isDecimal({ decimal_digits: "0,3" })
    .withMessage("Net weight must be a decimal with up to 3 decimal places"),
  body("duplicationAllowed")
    .optional()
    .isBoolean()
    .withMessage("Duplication allowed must be a boolean"),
  body("recurringItem")
    .optional()
    .isBoolean()
    .withMessage("Recurring item must be a boolean"),
  body("recurringPeriod")
    .optional()
    .isInt()
    .withMessage("Recurring period must be an integer"),
  body("batchControl")
    .optional()
    .isBoolean()
    .withMessage("Batch control must be a boolean"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
