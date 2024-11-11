// controllers/itemsController.js
import Items from "../models/Items.js";

export const getAllItems = async (req, res) => {
  try {
    const items = await Items.findAll();
    return res.json(items);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching items records" });
  }
};

export const getByPkItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Items.findByPk({ id });
    if (!item) {
      return res.status(404).json({ message: "item not found" });
    }
    return res.json(item);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching items records" });
  }
};

export const createItem = async (req, res) => {
  try {
    const itemData = req.body;
    const newItem = await Items.create(itemData);
    return res.status(201).json(newItem);
  } catch (error) {
    return res.status(500).json({ error: "Error creating item record" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const itemData = req.body;
    const [updated] = await Items.create(itemData);
    if (!updated) {
      res.status(404).json({ message: "item not found" });
    }
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json({ error: "Error creating item record" });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Items.destroy({ where: { id } });
    if (!item) {
      return res.status(404).json({ message: "item not found" });
    }
    return res.status(200).json({ message: "item deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Error fetching items records" });
  }
};

// Outros métodos (update, delete) seguem o mesmo padrão...
