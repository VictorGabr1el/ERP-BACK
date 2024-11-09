// controllers/settlementController.js
import Settlement from "../models/settlements.js";

export const createSettlement = async (req, res) => {
  try {
    const settlement = await Settlement.create(req.body);
    res.status(201).json(settlement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getSettlements = async (req, res) => {
  try {
    const settlements = await Settlement.findAll();
    res.status(200).json(settlements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSettlementById = async (req, res) => {
  try {
    const { id } = req.params;
    const settlement = await Settlement.findByPk(id);
    if (settlement) {
      res.status(200).json(settlement);
    } else {
      res.status(404).json({ message: "Settlement not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSettlement = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Settlement.update(req.body, { where: { id } });
    if (updated) {
      const updatedSettlement = await Settlement.findByPk(id);
      res.status(200).json(updatedSettlement);
    } else {
      res.status(404).json({ message: "Settlement not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteSettlement = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Settlement.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Settlement not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
