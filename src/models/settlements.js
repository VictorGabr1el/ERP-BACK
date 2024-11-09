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
      type: DataTypes.STRING,
      allowNull: false,
    },
    store: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.CHAR(1),
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
