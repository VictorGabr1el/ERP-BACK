// models/itemStock.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ItemStock = sequelize.define(
  "ItemStock",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    item: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    store: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.DECIMAL(12, 3),
      defaultValue: 0,
    },
    maxStock: {
      type: DataTypes.DECIMAL(12, 3),
      defaultValue: 0,
    },
    minStock: {
      type: DataTypes.DECIMAL(12, 3),
      defaultValue: 0,
    },
    location: {
      type: DataTypes.STRING(20),
    },
    stockDate: {
      type: DataTypes.DATE,
    },
    situation: {
      type: DataTypes.STRING(2),
    },
    accountingStock: {
      type: DataTypes.DECIMAL(12, 3),
      defaultValue: 0,
    },
    lastEntryDate: {
      type: DataTypes.DATE,
    },
    lastEntryQuantity: {
      type: DataTypes.DECIMAL(12, 3),
    },
    lastEntryStock: {
      type: DataTypes.DECIMAL(12, 3),
    },
    lastExitDate: {
      type: DataTypes.DATE,
    },
    lastExitQuantity: {
      type: DataTypes.DECIMAL(12, 3),
    },
    lastExitStock: {
      type: DataTypes.DECIMAL(12, 3),
    },
    usedStock: {
      type: DataTypes.DECIMAL(12, 3),
      defaultValue: 0,
    },
    replacementStock: {
      type: DataTypes.DECIMAL(12, 3),
      defaultValue: 0,
    },
    assistedStock: {
      type: DataTypes.DECIMAL(12, 3),
      defaultValue: 0,
    },
    damagedStock: {
      type: DataTypes.DECIMAL(12, 3),
    },
    maxSalesQuantity: {
      type: DataTypes.DECIMAL(12, 3),
    },
    replacementRate: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "item_stock",
    timestamps: true,
  }
);

export default ItemStock;
