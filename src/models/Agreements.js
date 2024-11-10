// models/agreements.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Ajuste o caminho conforme sua configuração do Sequelize

const Agreements = sequelize.define(
  "Agreements",
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    observation: {
      type: DataTypes.STRING(160),
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    discount: {
      type: DataTypes.DECIMAL(12, 2),
    },
    client: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    sale: {
      type: DataTypes.STRING(8),
    },
  },
  {
    tableName: "AGREEMENTS",
    timestamps: true,
  }
);

export default Agreements;
