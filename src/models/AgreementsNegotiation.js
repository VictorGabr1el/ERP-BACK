// models/agreements_negotiation.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Ajuste o caminho conforme sua configuração do Sequelize

const AgreementsNegotiation = sequelize.define(
  "AgreementsNegotiation",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true,
    },

    store: {
      type: DataTypes.DECIMAL(3),
      allowNull: false,
    },
    installment: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    receiptDate: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "AGREEMENTS_NEGOTIATION",
    timestamps: true,
  }
);

export default AgreementsNegotiation;
