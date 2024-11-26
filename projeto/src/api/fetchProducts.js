/**
 * Função para buscar produtos no Mercado Livre com base em uma consulta.
 * 
 * @async
 * @function fetchProducts
 * @param {string} query - O termo de busca para encontrar produtos.
 * @returns {Promise<Array>} Uma promessa que resolve para um array de resultados de produtos.
 * 
 * Exemplo de uso:
 * fetchProducts('laptop').then(results => console.log(results));
 */
const fetchProducts = async (query) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await response.json();

  return data.results;
};

export default fetchProducts;
