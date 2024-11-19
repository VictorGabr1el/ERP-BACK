// controllers/inventoryController.js
import Inventory from "../models/inventory.js";

export const createInventory = async (req, res) => {
  try {
    const inventory = await Inventory.create(req.body);
    res.status(201).json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.findAll();
    res.status(200).json(inventories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInventoryById = async (req, res) => {
  try {
    const inventory = await Inventory.findByPk(req.params.id);
    if (!inventory) {
      return res.status(404).json({ error: "Inventory not found." });
    }
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateInventory = async (req, res) => {
  try {
    const [updated] = await Inventory.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Inventory not found." });
    }
    const updatedInventory = await Inventory.findByPk(req.params.id);
    res.status(200).json(updatedInventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteInventory = async (req, res) => {
  try {
    const deleted = await Inventory.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Inventory not found." });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
