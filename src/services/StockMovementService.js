// services/StockMovementService.js

import sequelize from "../config/database.js";
import ItemStock from "../models/itemStock.js";
import {
  validateAccountingVsPhysicalStock,
  validateStockLimits,
} from "../utils/stockValidatorUtils.js";

const stockMovimentService = {
  /**
   * Movimenta estoque para entrada/saída.
   * @param {number} itemId - ID do item.
   * @param {number} storeId - ID da loja.
   * @param {number} quantityChange - Quantidade a ser alterada (positiva ou negativa).
   */

  async moveStock(itemId, storeId, quantityChange) {
    const transaction = await sequelize.transaction();

    try {
      const item = await ItemStock.findOne(
        { where: { item: itemId, store: storeId } },
        { transaction }
      );

      if (!item) {
        throw new Error("Item not found.");
      }

      const limitValidation = validateStockLimits(item, quantityChange);
      if (!limitValidation.valid) {
        throw new Error(limitValidation.message);
      }

      const discrepancyValidation = validateAccountingVsPhysicalStock(item);
      if (!discrepancyValidation.isValid) {
        throw new Error(discrepancyValidation.message);
      }

      // Atualiza o estoque
      item.stock += quantityChange;
      await item.save({ transaction });

      await transaction.commit();
      return {
        success: true,
        message: "Stock movement carried out successfully!",
      };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  /**
   * Faz validações estoque para entrada/saída.
   * @param {number} itemId - ID do item.
   * @param {number} storeId - ID da loja.
   * @param {number} quantity - Quantidade a ser processada (positiva ou negativa).
   */
  async processStockMovement(itemId, storeId, quantity) {
    const validation = await validateAccountingVsPhysicalStock(itemId, storeId);

    if (!validation.isValid) {
      throw new Error(validation.message);
    }

    // Continue com o processo de movimentação...
  },
};

export default stockMovimentService;
