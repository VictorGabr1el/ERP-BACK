// controllers/stockController.js
import ItemStock from "../models/itemStock.js";
import StockMovementService from "../services/StockMovementService.js";
import { validateAccountingVsPhysicalStock } from "../utils/stockValidatorUtils.js";

const StockController = {
  async validateStockDiscrepancy(req, res) {
    try {
      const { itemId, storeId } = req.body;

      const item = await ItemStock.findOne({
        where: { item: itemId, store: storeId },
      });

      if (!item) {
        return res.status(404).json({ message: "item not found" });
      }

      const result = await validateAccountingVsPhysicalStock(
        item.accountingStock,
        item.stock
      );

      if (!result.isValid) {
        return res.status(400).json({ message: result.message });
      }

      return res.status(200).json({ message: "Stock validation passed." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error." });
    }
  },

  async moveStock(req, res) {
    try {
      const { itemId, storeId, quantityChange } = req.body;

      const result = await StockMovementService.moveStock(
        itemId,
        storeId,
        quantityChange
      );

      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  },
};

export default StockController;
