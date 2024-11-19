// controllers/itemStockController.js
import ItemStock from "../models/itemStock.js";

export const createItemStock = async (req, res) => {
  try {
    const itemStock = await ItemStock.create(req.body);
    res.status(201).json(itemStock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getItemStocks = async (req, res) => {
  try {
    const itemStocks = await ItemStock.findAll();
    res.status(200).json(itemStocks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getItemStockById = async (req, res) => {
  try {
    const itemStock = await ItemStock.findByPk(req.params.id);
    if (!itemStock) {
      return res.status(404).json({ error: "Item stock not found." });
    }
    res.status(200).json(itemStock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateItemStock = async (req, res) => {
  try {
    const [updated] = await ItemStock.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Item stock not found." });
    }
    const updatedItemStock = await ItemStock.findByPk(req.params.id);
    res.status(200).json(updatedItemStock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteItemStock = async (req, res) => {
  try {
    const deleted = await ItemStock.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Item stock not found." });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
