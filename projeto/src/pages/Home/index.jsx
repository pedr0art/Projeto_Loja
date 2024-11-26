import React from 'react';

import Products from '../../components/Header/Products/Products';
import Provider from '../../context/Provider';
import Cart from '../../components/Header/Cart/Cart';
import Header from '../../components/Header/Header/Header';

/**
 * Componente principal da aplicação.
 * 
 * O `App` é o ponto de entrada da aplicação, que organiza e renderiza os componentes principais:
 * - `Header`: Exibe o cabeçalho, incluindo a barra de pesquisa e o botão do carrinho.
 * - `Products`: Exibe a lista de produtos disponíveis para compra.
 * - `Cart`: Exibe o carrinho de compras com os itens selecionados.
 * 
 * Todos esses componentes são encapsulados pelo `Provider`, que fornece o estado global da aplicação.
 * 
 * @component
 * 
 * @returns {JSX.Element} O componente da aplicação com os componentes principais.
 */
function Home() {
  return (
    // O Provider envolve os componentes, fornecendo o contexto global
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}

export default Home;
