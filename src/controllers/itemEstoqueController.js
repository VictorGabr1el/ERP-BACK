// controllers/itemEstoqueController.js
import ItemEstoque from "../models/ItemEstoque.js";

// Função para criar um novo registro de estoque
export const createItemEstoque = async (req, res) => {
  try {
    const itemEstoque = await ItemEstoque.create(req.body);
    return res.status(201).json(itemEstoque);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Função para listar todos os registros de estoque
export const getAllItemsEstoque = async (req, res) => {
  try {
    const itemsEstoque = await ItemEstoque.findAll();
    return res.status(200).json(itemsEstoque);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Função para obter um registro de estoque pelo código do item e loja
export const getItemEstoqueById = async (req, res) => {
  try {
    const { item, loja } = req.params;
    const itemEstoque = await ItemEstoque.findOne({
      where: { ITEM: item, LOJA: loja },
    });
    if (!itemEstoque)
      return res
        .status(404)
        .json({ error: "Registro de estoque não encontrado" });
    return res.status(200).json(itemEstoque);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Função para atualizar um registro de estoque
export const updateItemEstoque = async (req, res) => {
  try {
    const { item, loja } = req.params;
    const [updated] = await ItemEstoque.update(req.body, {
      where: { ITEM: item, LOJA: loja },
    });
    if (!updated)
      return res
        .status(404)
        .json({ error: "Registro de estoque não encontrado" });
    return res
      .status(200)
      .json({ message: "Registro de estoque atualizado com sucesso" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Função para deletar um registro de estoque
export const deleteItemEstoque = async (req, res) => {
  try {
    const { item, loja } = req.params;
    const deleted = await ItemEstoque.destroy({
      where: { ITEM: item, LOJA: loja },
    });
    if (!deleted)
      return res
        .status(404)
        .json({ error: "Registro de estoque não encontrado" });
    return res
      .status(200)
      .json({ message: "Registro de estoque deletado com sucesso" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
