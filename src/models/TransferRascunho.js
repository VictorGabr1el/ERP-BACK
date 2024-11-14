// models/TransferenciaRascunho.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const TransferenciaRascunho = sequelize.define(
  "TRANSFERENCIA_RASCUNHO",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ITEM: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    LOJA_ORIGEM: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    LOJA_DESTINO: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    QUANTIDADE: {
      type: DataTypes.DECIMAL(12, 3),
      allowNull: false,
    },
    BLOB: {
      type: DataTypes.JSONB,
    },
    STATUS: {
      type: DataTypes.STRING(20),
      defaultValue: "RAS", // 'RAS' indica Rascunho
    },
    DATA_CRIACAO: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    DATA_ATUALIZACAO: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    tableName: "TRANSFERENCIA_RASCUNHO",
  }
);

export default TransferenciaRascunho;
