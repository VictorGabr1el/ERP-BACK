// models/ItemEstoque.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ItemEstoque = sequelize.define(
  "ItemEstoque",
  {
    ITEM: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
    },
    LOJA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    ESTOQUE: {
      type: DataTypes.NUMERIC(12, 3),
      defaultValue: 0,
    },
    EST_MAX: {
      type: DataTypes.NUMERIC(12, 3),
      defaultValue: 0,
    },
    EST_MIN: {
      type: DataTypes.NUMERIC(12, 3),
      defaultValue: 0,
    },
    LOCALIZACAO: {
      type: DataTypes.STRING(20),
    },
    DATA_ESTOQUE: {
      type: DataTypes.DATE,
    },
    SITUACAO: {
      type: DataTypes.STRING(2),
    },
    ESTOQUE_CONTABIL: {
      type: DataTypes.NUMERIC(12, 3),
      defaultValue: 0,
    },
    DATA_ULT_ENTRADA: {
      type: DataTypes.DATE,
    },
    QTD_ULT_ENTRADA: {
      type: DataTypes.NUMERIC(12, 3),
    },
    EST_ULT_ENTRADA: {
      type: DataTypes.NUMERIC(12, 3),
    },
    DATA_ULT_SAIDA: {
      type: DataTypes.DATE,
    },
    QTD_ULT_SAIDA: {
      type: DataTypes.NUMERIC(12, 3),
    },
    EST_ULT_SAIDA: {
      type: DataTypes.NUMERIC(12, 3),
    },
    ESTOQUE_USADO: {
      type: DataTypes.NUMERIC(12, 3),
      defaultValue: 0,
    },
    ESTOQUE_REPOS: {
      type: DataTypes.NUMERIC(12, 3),
      defaultValue: 0,
    },
    ESTOQUE_ASSIS: {
      type: DataTypes.NUMERIC(12, 3),
      defaultValue: 0,
    },
    ESTOQUE_AVAR: {
      type: DataTypes.NUMERIC(12, 3),
    },
    QTD_MAX_VENDA: {
      type: DataTypes.NUMERIC(12, 3),
    },
    TAXA_REPOSICAO: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "ITENS_ESTOQUE",
    timestamps: true,
  }
);

export default ItemEstoque;
