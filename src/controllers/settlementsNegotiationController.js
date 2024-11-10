// controllers/settlementsNegotiationController.js
import SettlementsNegotiation from "../models/settlementsNegotiation.js";

// Listar todos os registros
export const getAllSettlementsNegotiation = async (req, res) => {
  try {
    const settlements = await SettlementsNegotiation.findAll();
    return res.json(settlements);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error fetching settlements negotiation records" });
  }
};

// Criar um novo registro
export const createSettlementNegotiation = async (req, res) => {
  try {
    const { code, store, installment, dueDate, value, receiptDate, entry } =
      req.body;
    const settlement = await SettlementsNegotiation.create({
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
    return res
      .status(500)
      .json({ error: "Error creating settlements negotiation record" });
  }
};

// Atualizar um registro existente
export const updateSettlementNegotiation = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, store, installment, dueDate, value, receiptDate, entry } =
      req.body;
    const [updated] = await SettlementsNegotiation.update(
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
      return res
        .status(404)
        .json({ error: "Settlement negotiation not found" });
    }
    return res.json({ message: "Settlement negotiation updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error updating settlement negotiation record" });
  }
};

// Deletar um registro
export const deleteSettlementNegotiation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SettlementsNegotiation.destroy({ where: { id } });

    if (!deleted) {
      return res
        .status(404)
        .json({ error: "Settlement negotiation not found" });
    }
    return res.json({ message: "Settlement negotiation deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error deleting settlement negotiation record" });
  }
};
