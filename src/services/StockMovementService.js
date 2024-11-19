// services/StockMovementService.js

import ItemStock from "../models/itemStock";
import { validateStockLimits } from "../utils/stockValidator";

const stockMovimentService = {
  /**
   * Movimenta estoque para entrada/saída.
   * @param {number} itemId - ID do item.
   * @param {number} storeId - ID da loja.
   * @param {number} quantityChange - Quantidade a ser alterada (positiva ou negativa).
   */

  async moveStock(itemId, storeId, quantityChange) {
    // Valida os limites de estoque
    const validation = await validateStockLimits(
      itemId,
      storeId,
      quantityChange
    );

    if (!validation.valid) {
      throw new Error(validation.message); // Retorna erro para o cliente
    }

    // Atualiza estoque no banco
    await ItemStock.increment("stock", {
      by: quantityChange,
      where: { item: itemId, store: storeId },
    });

    return { success: true, message: "Movimentação realizada com sucesso!" };
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

  /**
   * Faz checagem de discrepancia Estoque contábil vs Estoque Físico.
   * @param {number} itemId - ID do item.
   * @param {number} storeId - ID da loja.
   * @param {Promise<boolean>} - Quantidade a ser processada (positiva ou negativa).
   */

  async checkStockDiscrepancy(itemId, storeId) {
    const stock = await ItemStock.findOne({ where: { itemId, storeId } });

    if (!stock) {
      throw new Error("Stock record not found.");
    }

    const { accountingStock, physicalStock } = stock;

    const difference = Math.abs(accountingStock - physicalStock);
    const tolerance = 0.1; // Exemplo: limite configurável.

    if (difference > tolerance) {
      throw new Error(
        `Stock discrepancy detected for item ${itemId} in store ${storeId}: ` +
          `Accounting (${accountingStock}) vs Physical (${physicalStock}).`
      );
    }

    return true; // Estoque consistente.
  },
};
