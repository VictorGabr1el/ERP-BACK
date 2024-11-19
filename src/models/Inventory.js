// models/inventory.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Inventory = sequelize.define(
  "Inventory",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    store: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    itemQuantity: {
      type: DataTypes.DECIMAL(12, 3),
      defaultValue: 0,
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    cancellationReason: {
      type: DataTypes.STRING(80),
    },
    observation: {
      type: DataTypes.STRING(160),
    },
  },
  {
    tableName: "inventory",
    timestamps: true,
  }
);

export default Inventory;
