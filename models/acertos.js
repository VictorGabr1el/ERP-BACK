'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acertos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Acertos.init({
    codigo: DataTypes.STRING,
    loja: DataTypes.STRING,
    data: DataTypes.DATE,
    status: DataTypes.CHAR,
    desconto: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    observacao: DataTypes.STRING,
    venda: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Acertos',
  });
  return Acertos;
};