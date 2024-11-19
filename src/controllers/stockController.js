// controllers/stockController.js
import stockService from "../services/stockService.js";

const validateStockDiscrepancy = async (req, res) => {
  try {
    const { itemId, storeId } = req.body;

    const result = await stockService.checkStockDiscrepancy(itemId, storeId);

    if (!result.isValid) {
      return res.status(400).json({ message: result.message });
    }

    return res.status(200).json({ message: "Stock validation passed." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export default { validateStockDiscrepancy };
