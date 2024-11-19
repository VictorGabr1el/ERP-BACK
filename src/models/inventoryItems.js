// models/inventoryItems.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const InventoryItems = sequelize.define(
  "InventoryItems",
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
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    store: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currentStock: {
      type: DataTypes.DECIMAL(12, 3),
      defaultValue: 0,
    },
    foundStock: {
      type: DataTypes.DECIMAL(12, 3),
      defaultValue: 0,
    },
    entryExit: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    inventoryQuantity: {
      type: DataTypes.DECIMAL(8, 3),
    },
    previousBalance: {
      type: DataTypes.DECIMAL(12, 3),
    },
    itemType: {
      type: DataTypes.CHAR(1),
    },
  },
  {
    tableName: "inventory_items",
    timestamps: true,
  }
);

export default InventoryItems;
