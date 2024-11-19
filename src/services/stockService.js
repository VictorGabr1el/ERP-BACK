//  /services/stockServices.js

import ItemStock from "../models/itemStock.js";
import Items from "../models/items.js";

const checkStockDiscrepancy = async (itemId, storeId) => {
  const item = await Items.findOne({ where: { id: itemId } });

  if (!item) {
    return { isValid: false, message: "Item not found." };
  }

  if (!item.stockControl) {
    return {
      isValid: true,
      message: "Stock control not required for this item.",
    };
  }

  const stock = await ItemStock.findOne({ where: { itemId, storeId } });

  if (!stock) {
    return { isValid: false, message: "Stock record not found." };
  }

  const difference = Math.abs(stock.accountingStock - stock.physicalStock);

  // Exemplo: limite de tolerância configurável no futuro
  const tolerance = 0.1;

  if (difference > tolerance) {
    return {
      isValid: false,
      message: `Stock discrepancy detected: Accounting (${stock.accountingStock}) vs Physical (${stock.physicalStock}).`,
    };
  }

  return { isValid: true, message: "Stock is consistent." };
};

export default {
  checkStockDiscrepancy,
};
