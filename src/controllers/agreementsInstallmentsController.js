// controllers/agreementsInstallmentsController.js
import AgreementsInstallments from "../models/agreementsInstallments.js";

export const getAllAgreementsInstallments = async (req, res) => {
  try {
    const installments = await AgreementsInstallments.findAll();
    return res.json(installments);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error fetching agreements installments records" });
  }
};

export const createAgreementInstallment = async (req, res) => {
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
    } = req.body;
    const installmentRecord = await AgreementsInstallments.create({
      code,
      store,
      installment,
      dueDate,
      value,
      delay,
      interestValue,
      debitValue,
    });
    return res.status(201).json(installmentRecord);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error creating agreement installment record" });
  }
};

export const updateAgreementInstallment = async (req, res) => {
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
    } = req.body;
    const { id } = req.params;
    const [updated] = await AgreementsInstallments.update(
      {
        code,
        store,
        installment,
        dueDate,
        value,
        delay,
        interestValue,
        debitValue,
      },
      { where: { id } }
    );
    if (!updated) {
      return res.status(404).json({ error: "Agreement installment not found" });
    }
    return res
      .status(200)
      .json({ message: "Agreement installment updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error updating agreement installment record" });
  }
};

export const deleteAgreementInstallments = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await AgreementsInstallments.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "Agreement installment not found" });
    }
    return res.json({ message: "Agreement installment deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error deleting agreement installment record" });
  }
};
