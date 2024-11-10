// controllers/settlementsController.js
import Settlements from "../models/Settlements.js";

export const getAllSettlements = async (req, res) => {
  try {
    const settlements = await Settlements.findAll();
    return res.json(settlements);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error fetching settlements records" });
  }
};

export const getSettlementById = async (req, res) => {
  try {
    const { id } = req.params;
    const settlements = await Settlements.findByPk({ id });
    return res.json(settlements);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error fetching settlements records" });
  }
};

export const createSettlement = async (req, res) => {
  try {
    const { code, store, installment, dueDate, value, receiptDate, entry } =
      req.body;
    const settlement = await Settlements.create({
      code,
      store,
      installment,
      dueDate,
      value,
      receiptDate,
      entry,
    });
    return res.status(201).json(settlement);
  } catch (error) {
    return res.status(500).json({ error: "Error creating settlement record" });
  }
};

export const updateSettlement = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, store, installment, dueDate, value, receiptDate, entry } =
      req.body;
    const [updated] = await Settlements.update(
      {
        code,
        store,
        installment,
        dueDate,
        value,
        receiptDate,
        entry,
      },
      { where: { id } }
    );

    if (!updated) {
      return res.status(404).json({ error: "Settlement not found" });
    }
    return res.json({ message: "Settlement updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Error updating settlement record" });
  }
};

export const deleteSettlement = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Settlements.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "Settlement not found" });
    }
    return res.json({ message: "Settlement deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Error deleting settlement record" });
  }
};
