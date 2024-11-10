// controllers/agreementsController.js
import Agreements from "../models/Agreements.js";

export const getAllAgreements = async (req, res) => {
  try {
    const agreements = await Agreements.findAll();
    return res.json(agreements);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching agreements records" });
  }
};

export const createAgreement = async (req, res) => {
  try {
    const { code, store, date, observation, status, discount, client, sale } =
      req.body;
    const agreement = await Agreements.create({
      code,
      store,
      date,
      observation,
      status,
      discount,
      client,
      sale,
    });
    return res.status(201).json(agreement);
  } catch (error) {
    return res.status(500).json({ error: "Error creating agreement record" });
  }
};

export const updateAgreement = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, store, date, observation, status, discount, client, sale } =
      req.body;
    const [updated] = await Agreements.update(
      {
        code,
        store,
        date,
        observation,
        status,
        discount,
        client,
        sale,
      },
      { where: { id } }
    );

    if (!updated) {
      return res.status(404).json({ error: "Agreement not found" });
    }
    return res.json({ message: "Agreement updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Error updating agreement record" });
  }
};

export const deleteAgreement = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Agreements.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "Agreement not found" });
    }
    return res.json({ message: "Agreement deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Error deleting agreement record" });
  }
};
