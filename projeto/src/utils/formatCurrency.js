/**
 * Função para formatar um valor como moeda.
 * 
 * Esta função recebe um valor numérico e um código de moeda, e retorna o valor formatado de acordo com a moeda especificada.
 * A formatação será feita no formato brasileiro (pt-BR), utilizando a convenção de moeda apropriada.
 * 
 * @param {number} value - O valor numérico a ser formatado.
 * @param {string} currency - O código da moeda a ser utilizada (ex: 'BRL' para real brasileiro, 'USD' para dólar).
 * 
 * @returns {string} O valor formatado como uma string, representando o valor na moeda especificada.
 */
const formatCurrency = (value, currency) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency });
};

export default formatCurrency;
