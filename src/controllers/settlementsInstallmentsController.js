// controllers/settlementsInstallmentsController.js
import SettlementsInstallments from "../models/SettlementsInstallments.js";

// Listar todos os registros
export const getAllSettlementsInstallments = async (req, res) => {
  try {
    const installments = await SettlementsInstallments.findAll();
    return res.json(installments);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error fetching settlements installments records" });
  }
};
export const findByPkSettlementInstallment = async (req, res) => {
  try {
    const { id } = req.params;
    const installment = await SettlementsInstallments.findByPk({ id });
    return res.json(installment);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error fetching settlements installments records" });
  }
};

// Criar um novo registro
export const createSettlementInstallment = async (req, res) => {
  try {
    const {
      code,
      store,
      installment,
      dueDate,
      value,
      delay,
      interestValue,
      debitValue,
      invoice,
    } = req.body;
    const installmentRecord = await SettlementsInstallments.create({
      code,
      store,
      installment,
      dueDate,
      value,
      delay,
      interestValue,
      debitValue,
      invoice,
    });
    return res.status(201).json(installmentRecord);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error creating settlements installment record" });
  }
};

// Atualizar um registro existente
export const updateSettlementInstallment = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      code,
      store,
      installment,
      dueDate,
      value,
      delay,
      interestValue,
      debitValue,
      invoice,
    } = req.body;
    const [updated] = await SettlementsInstallments.update(
      {
        code,
        store,
        installment,
        dueDate,
        value,
        delay,
        interestValue,
        debitValue,
        invoice,
      },
      { where: { id } }
    );

    if (!updated) {
      return res
        .status(404)
        .json({ error: "Settlement installment not found" });
    }
    return res.json({ message: "Settlement installment updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error updating settlement installment record" });
  }
};

// Deletar um registro
export const deleteSettlementInstallment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SettlementsInstallments.destroy({ where: { id } });

    if (!deleted) {
      return res
        .status(404)
        .json({ error: "Settlement installment not found" });
    }
    return res.json({ message: "Settlement installment deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error deleting settlement installment record" });
  }
};
