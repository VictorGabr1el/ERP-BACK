// utils/expiryValidator.js
/**
 * Valida se o produto está vencido ou próximo do vencimento.
 * @param {object} item - ID do produto.
 * @returns {object} - Resultado da validação { valid: boolean, message: string }
 */
export const validateProductExpiry = async (item) => {
  // Converte a data de validade para uma data padrão
  const expiryDate = new Date(item.expiryDate);

  // Bloqueia movimentações de produtos vencidos
  if (expiryDate < currentDate) {
    return { valid: false, message: "Expired product. Movement blocked." };
  }

  // Alerta para produtos próximos ao vencimento (por exemplo, 7 dias antes)
  const warningPeriod = 7; // Alertar se a validade estiver a 7 dias de expirar
  if ((expiryDate - currentDate) / (1000 * 3600 * 24) <= warningPeriod) {
    return {
      valid: false,
      message: `Product with expiration date (${warningPeriod} days) close to expiration date.`,
    };
  }

  return { valid: true, message: "Product valid for movement." };
};
