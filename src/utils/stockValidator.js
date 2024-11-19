// utils/stockValidator.js

import ItemStock from "../models/itemStock"; // Modelo que representa a tabela ITENS_ESTOQUE

/**
 * Valida os limites de estoque mínimo e máximo.
 * @param {number} itemId - ID do item a ser verificado.
 * @param {number} storeId - ID da loja a ser verificada.
 * @param {number} quantityChange - Mudança de quantidade (positivo ou negativo).
 * @returns {object} - Resultado da validação.
 */
export const validateStockLimits = async (itemId, storeId, quantityChange) => {
  try {
    const stock = await ItemStock.findOne({
      where: { item: itemId, store: storeId },
    });

    if (!stock) {
      return {
        valid: false,
        message: "Stock not found for the specified item and store.",
      };
    }

    const newStockLevel = stock.ESTOQUE + quantityChange;

    if (newStockLevel < stock.EST_MIN) {
      return {
        valid: false,
        message: `Stock below minimum allowed (${stock.EST_MIN}).`,
      };
    }

    if (stock.EST_MAX > 0 && newStockLevel > stock.EST_MAX) {
      return {
        valid: false,
        message: `Stock above maximum allowed (${stock.EST_MAX}).`,
      };
    }

    return { valid: true };
  } catch (error) {
    console.error("Error to validate the stock limit", error);
    return { valid: false, message: "Erro to validate stock." };
  }
};

/**
 * Valida se o estoque contábil e físico estão consistentes para um determinado item e loja.
 * @param {integer} itemId - ID do item.
 * @param {integer} storeId - ID da loja.
 * @returns {Object} Resultado da validação { isValid: boolean, message: string }
 */
export const validateAccountingVsPhysicalStock = async (itemId, storeId) => {
  const stock = await ItemStock.findOne({
    where: { item: itemId, store: storeId },
    attributes: ["accountingStock", "physicalStock"],
  });

  if (!stock) {
    return { isValid: false, message: "Stock record not found." };
  }

  const difference = Math.abs(stock.accountingStock - stock.physicalStock);
  const tolerance = 0.1; // Configurável

  if (difference > tolerance) {
    return {
      isValid: false,
      message: `Discrepancy detected: Accounting (${stock.accountingStock}) vs Physical (${stock.physicalStock}).`,
    };
  }

  return { isValid: true };
};
