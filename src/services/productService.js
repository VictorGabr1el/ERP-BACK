// services/productService.js
import ItemStock from "../models/itemStock.js"; // Modelo para a tabela ITENS_ESTOQUE

const ProductService = {
  /**
   * Verifica o saldo de estoque atual de um produto em uma loja.
   * @param {number} itemId - ID do produto.
   * @param {number} storeId - ID da loja.
   * @returns {Promise<number>} - Saldo de estoque atual.
   */
  async checkStock(itemId, storeId) {
    const stock = await ItemStock.findOne({
      where: {
        item: itemId,
        store: storeId,
      },
    });

    if (!stock) {
      throw new Error(
        "Stock record not found for the specified item and store."
      );
    }

    return stock.stock; // Saldo de estoque atual.
  },

  /**
   * Verifica se há saldo suficiente para uma movimentação.
   * @param {number} itemId - ID do produto.
   * @param {number} storeId - ID da loja.
   * @param {number} quantity - Quantidade desejada.
   * @returns {Promise<boolean>} - Retorna `true` se houver saldo suficiente, caso contrário, lança um erro.
   */
  async hasSufficientStock(itemId, storeId, quantity) {
    const currentStock = await this.checkStock(itemId, storeId);

    if (currentStock < quantity) {
      throw new Error(
        `Insufficient stock. Available: ${currentStock}, Required: ${quantity}.`
      );
    }

    return true;
  },

  /**
   * Atualiza o saldo de estoque de um produto.
   * @param {number} itemId - ID do produto.
   * @param {number} storeId - ID da loja.
   * @param {number} quantity - Quantidade para somar/subtrair.
   * @param {string} type - Tipo da movimentação ('ADD' para entrada, 'SUB' para saída).
   * @returns {Promise<void>}
   */
  async updateStock(itemId, storeId, quantity, type) {
    const stock = await ItemStock.findOne({
      where: {
        item: itemId,
        store: storeId,
      },
    });

    if (!stock) {
      throw new Error(
        "Stock record not found for the specified item and store."
      );
    }

    if (type === "SUB") {
      await this.hasSufficientStock(itemId, storeId, quantity);
      stock.stock -= quantity;
    } else if (type === "ADD") {
      stock.stock += quantity;
    } else {
      throw new Error("Invalid update type. Use 'ADD' or 'SUB'.");
    }

    await stock.save();
  },

  /**
   * Valida se o produto é controlado por série ou outros parâmetros específicos.
   * @param {object} item - Objeto do produto.
   * @returns {Promise<boolean>}
   */
  async validateItem(item) {
    if (item.useSerial) {
      throw new Error(`Item ${item.id} requires serial control.`);
    }

    // Outras validações específicas podem ser adicionadas aqui.
    return true;
  },
};

export default ProductService;
