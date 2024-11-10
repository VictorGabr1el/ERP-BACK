// models/alerts.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database"; // Ajuste o caminho conforme sua configuração do Sequelize

const Alerts = sequelize.define(
  "Alerts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    alert: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
  },
  {
    tableName: "ALERTS",
    timestamps: true,
  }
);

export default Alerts;
