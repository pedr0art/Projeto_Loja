import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';
import fetchProducts from '../../../api/fetchProducts';
import AppContext from '../../../context/AppContext';

/**
 * Componente para exibir uma barra de pesquisa de produtos.
 * 
 * Este componente:
 * - Permite que o usuário digite um termo de pesquisa.
 * - Realiza a busca de produtos com base no termo de pesquisa.
 * - Atualiza a lista de produtos e o estado de carregamento enquanto a busca está em andamento.
 * 
 * @component
 * 
 * @returns {JSX.Element} Um formulário com campo de pesquisa e botão para buscar produtos.
 */
function SearchBar() {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setsearchValue] = useState('');

  /**
   * Função que lida com o envio do formulário de pesquisa.
   * 
   * - Previne o comportamento padrão do formulário.
   * - Ativa o estado de carregamento enquanto busca os produtos.
   * - Chama a função `fetchProducts` com o valor de pesquisa.
   * - Atualiza o estado global com os produtos encontrados.
   * - Desativa o estado de carregamento e limpa o campo de pesquisa após a busca.
   * 
   * @param {Event} event - O evento de envio do formulário.
   */
  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setsearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {/* Campo de entrada para o termo de pesquisa */}
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({ target }) => setsearchValue(target.value)}
        required
      />
      {/* Botão para submeter a pesquisa */}
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
