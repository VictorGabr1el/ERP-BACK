// controllers/transferenciaRascunhoController.js
import TransferenciaRascunho from "../models/TransferenciaRascunho.js";

// Função para criar um novo rascunho de transferência
export const criarRascunho = async (req, res) => {
  try {
    const { ITEM, LOJA_ORIGEM, LOJA_DESTINO, QUANTIDADE, BLOB } = req.body;

    const novoRascunho = await TransferenciaRascunho.create({
      ITEM,
      LOJA_ORIGEM,
      LOJA_DESTINO,
      QUANTIDADE,
      BLOB,
    });

    res.status(201).json(novoRascunho);
  } catch (error) {
    console.error("Erro ao criar rascunho:", error);
    res.status(500).json({ error: "Erro ao criar rascunho de transferência" });
  }
};

export const atualizarRascunho = async (req, res) => {
  try {
    const { id } = req.params;
    const { ITEM, LOJA_ORIGEM, LOJA_DESTINO, QUANTIDADE, BLOB, STATUS } =
      req.body;

    const rascunho = await TransferenciaRascunho.findByPk(id);

    if (!rascunho) {
      return res.status(404).json({ error: "Rascunho não encontrado" });
    }

    await rascunho.update({
      ITEM,
      LOJA_ORIGEM,
      LOJA_DESTINO,
      QUANTIDADE,
      BLOB,
      STATUS,
      DATA_ATUALIZACAO: new Date(),
    });

    res.json(rascunho);
  } catch (error) {
    console.error("Erro ao atualizar rascunho:", error);
    res
      .status(500)
      .json({ error: "Erro ao atualizar rascunho de transferência" });
  }
};
