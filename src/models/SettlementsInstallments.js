// models/settlements_installments.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Adjust path based on your Sequelize setup

const SettlementsInstallments = sequelize.define(
  "SettlementsInstallments",
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
    },
    delay: {
      type: DataTypes.INTEGER,
    },
    interestAmount: {
      type: DataTypes.DECIMAL(15, 2),
    },
    debtAmount: {
      type: DataTypes.DECIMAL(15, 2),
    },
    invoice: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
  },
  {
    tableName: "SETTLEMENTS_INSTALLMENTS",
    timestamps: true,
  }
);

export default SettlementsInstallments;
