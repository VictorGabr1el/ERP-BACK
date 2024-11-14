// controllers/itemController.js
import Item from "../models/Item.js";

// Função para criar um novo item
export const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    return res.status(201).json(item);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Função para listar todos os itens
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    return res.status(200).json(items);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Função para obter um item pelo código
export const getItemByCode = async (req, res) => {
  try {
    const { code } = req.params;
    const item = await Item.findOne({ where: { CODIGO: code } });
    if (!item) return res.status(404).json({ error: "Item não encontrado" });
    return res.status(200).json(item);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Função para atualizar um item
export const updateItem = async (req, res) => {
  try {
    const { code } = req.params;
    const [updated] = await Item.update(req.body, { where: { CODIGO: code } });
    if (!updated) return res.status(404).json({ error: "Item não encontrado" });
    return res.status(200).json({ message: "Item atualizado com sucesso" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Função para deletar um item
export const deleteItem = async (req, res) => {
  try {
    const { code } = req.params;
    const deleted = await Item.destroy({ where: { CODIGO: code } });
    if (!deleted) return res.status(404).json({ error: "Item não encontrado" });
    return res.status(200).json({ message: "Item deletado com sucesso" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
