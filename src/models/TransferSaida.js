import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // substitua com sua configuração de conexão

const TransferSaida = sequelize.define(
  "TransferSaida",
  {
    codigo: { type: DataTypes.STRING(8), allowNull: false },
    loja: { type: DataTypes.STRING(3), allowNull: false },
    cliente: { type: DataTypes.STRING(5), allowNull: false },
    loja_destino: { type: DataTypes.STRING(3), allowNull: false },
    data: { type: DataTypes.DATE, allowNull: false },
    vendedor: { type: DataTypes.STRING(4) },
    tpo_dscto: { type: DataTypes.CHAR(1) },
    val_dscto: { type: DataTypes.DECIMAL(12, 2), defaultValue: 0 },
    qtd_itens: { type: DataTypes.DECIMAL(12, 3), defaultValue: 0 },
    tot_saida: { type: DataTypes.DECIMAL(15, 2), defaultValue: 0 },
    status: { type: DataTypes.CHAR(1) },
    motivo_cancela: { type: DataTypes.STRING(80) },
    observacao: { type: DataTypes.STRING(160) },
    impressoes: { type: DataTypes.INTEGER, defaultValue: 0 },
    entrega: { type: DataTypes.CHAR(1) },
    controle: { type: DataTypes.INTEGER },
    conferido: { type: DataTypes.CHAR(1) },
    nro_docto: { type: DataTypes.STRING(8) },
    entrega_tipo: { type: DataTypes.STRING(2) },
    arquivo: { type: DataTypes.BLOB },
    destino_entregue: { type: DataTypes.CHAR(1) },
  },
  {
    tableName: "TRANSF_SAIDA",
    timestamps: true,
  }
);

export default TransferSaida;
