// models/Item.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Item = sequelize.define(
  "Item",
  {
    CODIGO: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
    },
    COD_BARRA: {
      type: DataTypes.STRING(13),
    },
    DESCRICAO: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    CADASTRO: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    IPI: {
      type: DataTypes.NUMERIC(5, 2),
      defaultValue: 0,
    },
    REFERENCIA: {
      type: DataTypes.STRING(60),
    },
    APLICACAO: {
      type: DataTypes.STRING(80),
    },
    VOLUME: {
      type: DataTypes.NUMERIC(8, 2),
      defaultValue: 0,
    },
    CLASSIF: {
      type: DataTypes.STRING(4),
    },
    ATIVO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    COD_FABRICANTE: {
      type: DataTypes.STRING(20),
    },
    FOTO: {
      type: DataTypes.STRING(10),
    },
    SUB_GRUPO: {
      type: DataTypes.STRING(4),
    },
    GRUPO: {
      type: DataTypes.STRING(4),
    },
    UNIDADE: {
      type: DataTypes.STRING(2),
    },
    COR: {
      type: DataTypes.STRING(4),
    },
    PRODUTO: {
      type: DataTypes.STRING(4),
    },
    EMBALAGEM: {
      type: DataTypes.STRING(4),
    },
    MARCA: {
      type: DataTypes.STRING(4),
    },
    MODELO: {
      type: DataTypes.STRING(4),
    },
    ALIQUOTA: {
      type: DataTypes.STRING(2),
    },
    FORNECEDOR: {
      type: DataTypes.STRING(4),
    },
    SERVICO: {
      type: DataTypes.CHAR(1),
    },
    CMS_VISTA: {
      type: DataTypes.NUMERIC(6, 2),
      defaultValue: 0,
    },
    CMS_PRAZO: {
      type: DataTypes.NUMERIC(6, 2),
      defaultValue: 0,
    },
    DESCR_CUPOM: {
      type: DataTypes.STRING(30),
    },
    PESO: {
      type: DataTypes.NUMERIC(6, 3),
      defaultValue: 0,
    },
    EMBAL: {
      type: DataTypes.STRING(5),
    },
    ALIQUOTA2: {
      type: DataTypes.STRING(2),
    },
    USADO: {
      type: DataTypes.CHAR(1),
    },
    USA_SERIAL: {
      type: DataTypes.CHAR(1),
    },
    CMS_VISTA_EXTERNA: {
      type: DataTypes.NUMERIC(6, 2),
    },
    CMS_PRAZO_EXTERNA: {
      type: DataTypes.NUMERIC(6, 2),
    },
    NCM: {
      type: DataTypes.STRING(8),
    },
    CODPEC: {
      type: DataTypes.STRING(8),
    },
    PRINCIPIO_ATIVO: {
      type: DataTypes.STRING(100),
    },
    VAL_BASE_ICMS_SUB: {
      type: DataTypes.NUMERIC(12, 2),
    },
    REDUCAO: {
      type: DataTypes.NUMERIC(12, 2),
    },
    DESCONTO_BLOQUEADO: {
      type: DataTypes.CHAR(1),
    },
    LABORATORIO: {
      type: DataTypes.STRING(4),
    },
    ITEM_DEPENDENCIA: {
      type: DataTypes.STRING(5),
    },
    UNIDADE_COMPRA: {
      type: DataTypes.STRING(4),
    },
    UNIDADE_VENDA: {
      type: DataTypes.STRING(4),
    },
    UNIDADE_TRIBUTAVEL: {
      type: DataTypes.STRING(4),
    },
    PRODUTO_ESPECIFICO: {
      type: DataTypes.INTEGER,
    },
    ALTERA_PRECO: {
      type: DataTypes.CHAR(1),
    },
    ALTERA_DESCRICAO: {
      type: DataTypes.CHAR(1),
    },
    CONTROLA_ESTOQUE: {
      type: DataTypes.CHAR(1),
    },
    INFORMACOES: {
      type: DataTypes.STRING(200),
    },
    FABRICANTE: {
      type: DataTypes.STRING(4),
    },
    PERMITE_ALTERAR_PRECO: {
      type: DataTypes.CHAR(1),
    },
    ITEM_GENERO: {
      type: DataTypes.STRING(2),
    },
    ITEM_TIPO: {
      type: DataTypes.STRING(2),
    },
    TEM_MONTAGEM: {
      type: DataTypes.CHAR(1),
    },
    PONTOS_MONTAGEM: {
      type: DataTypes.INTEGER,
    },
    DATA_HORA_ATUALIZACAO: {
      type: DataTypes.DATE,
    },
    GRUPO_PRECO: {
      type: DataTypes.STRING(5),
    },
    GRUPO_PRECO_DESCRICAO: {
      type: DataTypes.STRING(40),
    },
    PESO_BRUTO: {
      type: DataTypes.NUMERIC(6, 3),
    },
    TABELA_PRECO_ESPACO: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    ORIGEM_MERCADORIA: {
      type: DataTypes.STRING(2),
    },
    CEST: {
      type: DataTypes.STRING(7),
    },
    FRACIONADO: {
      type: DataTypes.CHAR(1),
    },
    CONTROLA_VENCIMENTO: {
      type: DataTypes.CHAR(1),
    },
    VOLUME_COMPRA: {
      type: DataTypes.NUMERIC(8, 2),
    },
    CEST_ESCALA: {
      type: DataTypes.CHAR(1),
    },
    CEST_CNPJ: {
      type: DataTypes.STRING(19),
    },
    CARGA_BALANCA: {
      type: DataTypes.CHAR(1),
    },
    VENCIMENTO: {
      type: DataTypes.DATE,
    },
    ICMSREDUCAO: {
      type: DataTypes.NUMERIC(6, 4),
    },
    GLGNN: {
      type: DataTypes.NUMERIC(6, 4),
    },
    GLGNI: {
      type: DataTypes.NUMERIC(6, 4),
    },
    COD_PROD_ANVISA: {
      type: DataTypes.STRING(13),
    },
    MOTIVO_ISENCAO_ANVISA: {
      type: DataTypes.STRING(255),
    },
    PRE_MAXIMO_ANVISA: {
      type: DataTypes.NUMERIC(13, 2),
    },
    ITEM_COMPOSICAO: {
      type: DataTypes.CHAR(1),
    },
    PESO_LIQUIDO: {
      type: DataTypes.NUMERIC(6, 3),
    },
    PERMITE_DUPLICAR: {
      type: DataTypes.STRING(1),
    },
    ITEM_RECORRENTE: {
      type: DataTypes.CHAR(1),
    },
    PERIODO_RECORRENTE: {
      type: DataTypes.INTEGER,
    },
    CONTROLA_LOTE: {
      type: DataTypes.CHAR(1),
    },
  },
  {
    tableName: "ITENS",
    timestamps: true,
  }
);

export default Item;
