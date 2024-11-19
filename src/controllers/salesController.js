// controllers/salesController.js
import Sales from "../models/sales.js";

export const createSale = async (req, res) => {
  try {
    const sale = await Sales.create(req.body);
    res.status(201).json(sale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getSales = async (req, res) => {
  try {
    const sales = await Sales.findAll();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSaleById = async (req, res) => {
  try {
    const sale = await Sales.findByPk(req.params.id);
    if (!sale) {
      return res.status(404).json({ error: "Sale not found." });
    }
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSale = async (req, res) => {
  try {
    const [updated] = await Sales.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Sale not found." });
    }
    const updatedSale = await Sales.findByPk(req.params.id);
    res.status(200).json(updatedSale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteSale = async (req, res) => {
  try {
    const deleted = await Sales.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Sale not found." });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
