// models/User.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define(
  "USERS",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    store: {
      type: DataTypes.DECIMAL(3),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    role: {
      type: DataTypes.STRING(20),
    },
    cashier: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    initial_screen: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    theme: {
      type: DataTypes.STRING(40),
    },
    group: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    login_time: {
      type: DataTypes.INTEGER,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    menu_tabs: {
      type: DataTypes.STRING(100),
    },
    token: {
      type: DataTypes.STRING(64),
    },
    employee_id: {
      type: DataTypes.STRING(7),
    },
    otp_token: {
      type: DataTypes.STRING(200),
    },
  },
  {
    tableName: "USERS",
    timestamps: true,
  }
);

export default User;
