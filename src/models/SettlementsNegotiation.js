// models/settlements_negotiation.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Adjust path based on your Sequelize setups

const SettlementsNegotiation = sequelize.define(
  "SettlementsNegotiation",
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
    entry: {
      type: DataTypes.BOOLEAN,
      toDefaultValue: false,
    },
  },
  {
    tableName: "SETTLEMENTS_NEGOTIATION",
    timestamps: true,
  }
);

export default SettlementsNegotiation;
