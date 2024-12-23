// models/Settlements.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Settlement = sequelize.define(
  "Settlement",
  {
    id: {
      type: DataTypes.INTEGER,
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
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    discount: {
      type: DataTypes.DECIMAL,
    },
    total: {
      type: DataTypes.DECIMAL,
    },
    note: {
      type: DataTypes.TEXT,
    },
    sale: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "SETTLEMENTS",
    timestamps: true,
  }
);

export default Settlement;
