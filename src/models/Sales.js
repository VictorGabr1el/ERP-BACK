// models/sales.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Sales = sequelize.define(
  "Sales",
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
      type: DataTypes.INTEGER, // Referencia tabela de gerenciamento de lojas
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    seller: DataTypes.INTEGER, // Referencia tabela de vendedores
    client: DataTypes.INTEGER, // Referencia tabela de clientes
    receipt: DataTypes.STRING(9),
    status: DataTypes.STRING(1),
    discountType: DataTypes.STRING(1),
    discountValue: {
      type: DataTypes.DECIMAL(12, 2),
      defaultValue: 0,
    },
    totalSale: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0,
    },
    noClient: DataTypes.BOOLEAN,
    itemQuantity: {
      type: DataTypes.DECIMAL(12, 3),
      defaultValue: 0,
    },
    sent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cancelReason: DataTypes.STRING(80),
    cashier: DataTypes.STRING(4),
    time: DataTypes.TIME,
    terminalCode: DataTypes.STRING(8),
    plan: DataTypes.STRING(2),
    endorser: DataTypes.INTEGER, // Referencia tabela de avalistas
    budget: DataTypes.STRING(6),
    billingClerk: DataTypes.INTEGER, // Referencia tabela de faturistas
    hour: DataTypes.STRING(10),
    financialExpense: {
      type: DataTypes.DECIMAL(12, 2),
      defaultValue: 0,
    },
    financialDiscount: {
      type: DataTypes.DECIMAL(12, 2),
      defaultValue: 0,
    },
    printed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    employee: DataTypes.INTEGER, // Referencia tabela de colaboradores
    card: DataTypes.BOOLEAN,
    delivery: DataTypes.BOOLEAN,
    user: DataTypes.INTEGER, // Referencia tabela de usuários
    prints: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    observation: DataTypes.STRING(255),
    serviceOrder: DataTypes.STRING(8),
    receiptDate: DataTypes.DATE,
    ecf: DataTypes.STRING(2),
    deliveryType: DataTypes.STRING(2),
    deliveryEmployee: DataTypes.STRING(7),
    paymentMethod: DataTypes.STRING(120),
    agreement: DataTypes.INTEGER, // Referencia tabela de convênios
    agreementCode: DataTypes.STRING(20),
    purchaseOrder: DataTypes.STRING(15),
    totalService: DataTypes.DECIMAL(12, 2),
    synchronized: DataTypes.BOOLEAN,
    receivedChange: DataTypes.DECIMAL(12, 2),
    changeValue: DataTypes.DECIMAL(12, 2),
    serviceMargin: DataTypes.DECIMAL(5, 2),
  },
  {
    tableName: "SALES",
    timestamps: true,
  }
);

export default Sales;
