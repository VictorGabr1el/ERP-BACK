// models/agreements_installments.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Ajuste o caminho conforme sua configuração do Sequelize

const AgreementsInstallments = sequelize.define(
  "AgreementsInstallments",
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
      defaultValue: 0,
    },
    delay: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    interestAmount: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0,
    },
    debtAmount: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0,
    },
  },
  {
    tableName: "AGREEMENTS_INSTALLMENTS",
    timestamps: true,
  }
);

export default AgreementsInstallments;
