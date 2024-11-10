// controllers/agreementsNegotiationController.js
import AgreementsNegotiation from "../models/agreementsNegotiation.js";

export const getAllAgreementsNegotiation = async (req, res) => {
  try {
    const negotiations = await AgreementsNegotiation.findAll();
    return res.json(negotiations);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error fetching agreements negotiation records" });
  }
};

export const createAgreementNegotiation = async (req, res) => {
  try {
    const { code, store, installment, dueDate, value, receiptDate } = req.body;
    const negotiationRecord = await AgreementsNegotiation.create({
      code,
      store,
      installment,
      dueDate,
      value,
      receiptDate,
    });
    return res.status(201).json(negotiationRecord);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error creating agreement negotiation record" });
  }
};
export const updateAgreementNegotiation = async (req, res) => {
  try {
    const { code, store, installment, dueDate, value, receiptDate } = req.body;
    const [updated] = await AgreementsNegotiation.update({
      code,
      store,
      installment,
      dueDate,
      value,
      receiptDate,
    });
    if (!updated) {
      return res.status(404).json({ error: "Agreement negotiation not found" });
    }
    return res
      .status(200)
      .json({ message: "Agreement negotiation updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error updating agreement negotiation record" });
  }
};

export const deleteAgreementNegotiation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await AgreementsNegotiation.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "Agreement negotiation not found" });
    }
    return res.json({ message: "Agreement negotiation deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error deleting agreement negotiation record" });
  }
};
