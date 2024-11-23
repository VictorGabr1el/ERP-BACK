// utils/stockValidator.js

/**
 * Valida os limites de estoque mínimo e máximo.
 * @param {object} item - item a ser verificado.
 * @param {number} quantityChange - Valor a ser alterado no estoque.
 * @returns {object} - Resultado da validação { valid: boolean, message: string }
 */
export const validateStockLimits = (item, quantityChange) => {
  if (!item) {
    return {
      valid: false,
      message: "Item not found.",
    };
  }

  const newStockLevel = item.stock + quantityChange;

  if (newStockLevel < item.EST_MIN) {
    return {
      valid: false,
      message: `Stock below minimum allowed (${item.EST_MIN}).`,
    };
  }

  if (item.EST_MAX > 0 && newStockLevel > item.EST_MAX) {
    return {
      valid: false,
      message: `Stock above maximum allowed (${item.EST_MAX}).`,
    };
  }

  return { valid: true, message: "Valid stock limit." };
};

/**
 * Valida se o estoque contábil e físico estão consistentes para um determinado item e loja.
 * @param {object} item - item a ser verificado.
 * @returns {Object} Resultado da validação { isValid: boolean, message: string }
 */
export const validateAccountingVsPhysicalStock = (item) => {
  if (!item) {
    return { isValid: false, message: "Item not found." };
  }

  const { accountingStock, stock } = item;

  const difference = Math.abs(accountingStock - stock);
  const tolerance = 0.1; // Configurável

  if (difference > tolerance) {
    return {
      isValid: false,
      message: `Discrepancy detected: Accounting (${accountingStock}) vs Physical (${stock}).`,
    };
  }

  return { isValid: true, message: "Stock levels are consistent." };
};

/**
 * Validates if the item is locked.
 * @param {object} item - The item object to be validated.
 * @returns {object} - Validation result { valid: boolean, message: string }
 */
export const validateItemLock = (item) => {
  if (item.locked) {
    return {
      valid: false,
      message: "Item is currently locked and cannot be moved.",
    };
  }

  return {
    valid: true,
    message: "Item is not locked.",
  };
};

/**
 * Valida se o produto está ativo antes de processar ações.
 * @param {object} item - The item object to be validated.
 * @returns {Object} - Validation result { isValid: boolean, message: string }
 */
export const validateProductIsActive = async (item) => {
  if (!item.active) {
    return { isValid: false, message: "Inactive or discontinued product." };
  }

  return { isValid: true, message: "Product is active." };
};
