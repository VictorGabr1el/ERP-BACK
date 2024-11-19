// controllers/inventoryItemsController.js
import InventoryItems from "../models/inventoryItems.js";

export const createInventoryItem = async (req, res) => {
  try {
    const inventoryItem = await InventoryItems.create(req.body);
    res.status(201).json(inventoryItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getInventoryItems = async (req, res) => {
  try {
    const inventoryItems = await InventoryItems.findAll();
    res.status(200).json(inventoryItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInventoryItemById = async (req, res) => {
  try {
    const inventoryItem = await InventoryItems.findByPk(req.params.id);
    if (!inventoryItem) {
      return res.status(404).json({ error: "Inventory item not found." });
    }
    res.status(200).json(inventoryItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateInventoryItem = async (req, res) => {
  try {
    const [updated] = await InventoryItems.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Inventory item not found." });
    }
    const updatedInventoryItem = await InventoryItems.findByPk(req.params.id);
    res.status(200).json(updatedInventoryItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteInventoryItem = async (req, res) => {
  try {
    const deleted = await InventoryItems.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Inventory item not found." });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
