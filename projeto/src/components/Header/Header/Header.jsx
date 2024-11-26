import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
import './Header.css';

/**
 * Componente para exibir o cabeçalho da aplicação.
 * 
 * O cabeçalho contém:
 * - Uma barra de pesquisa para buscar produtos.
 * - Um botão para acessar o carrinho de compras.
 * 
 * @component
 * 
 * @returns {JSX.Element} Um cabeçalho com a barra de pesquisa e o botão do carrinho.
 */
function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Barra de pesquisa */}
        <SearchBar />
        {/* Título da página */}
        <h1 className="page-title">Furtados do Pedro Furtado</h1>
        {/* Botão do carrinho */}
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
