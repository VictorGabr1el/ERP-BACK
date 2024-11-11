// /controllers/transferController.js
import TransferSaida from "../models/transferSaida.js";

// Listar todas as transferências
export const getAllTransfers = async (req, res) => {
  try {
    const transfers = await TransferSaida.findAll();
    res.json(transfers);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar transferências" });
  }
};

// Criar uma nova transferência
export const createTransfer = async (req, res) => {
  try {
    const newTransfer = await TransferSaida.create(req.body);
    res.status(201).json(newTransfer);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar transferência" });
  }
};

// Atualizar uma transferência
export const updateTransfer = async (req, res) => {
  try {
    const { codigo } = req.params;
    const [updated] = await TransferSaida.update(req.body, {
      where: { codigo },
    });
    if (updated) {
      const updatedTransfer = await TransferSaida.findOne({
        where: { codigo },
      });
      res.json(updatedTransfer);
    } else {
      res.status(404).json({ error: "Transferência não encontrada" });
    }
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar transferência" });
  }
};

// Cancelar uma transferência
export const cancelTransfer = async (req, res) => {
  try {
    const { codigo } = req.params;
    const transfer = await TransferSaida.findOne({ where: { codigo } });
    if (transfer) {
      transfer.status = "C"; // Supondo que 'C' indique "cancelada"
      transfer.motivo_cancela = req.body.motivo_cancela || "Não especificado";
      await transfer.save();
      res.json(transfer);
    } else {
      res.status(404).json({ error: "Transferência não encontrada" });
    }
  } catch (error) {
    res.status(400).json({ error: "Erro ao cancelar transferência" });
  }
};
