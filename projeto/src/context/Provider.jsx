import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

/**
 * Componente provedor que fornece estados globais para a aplicação.
 * 
 * Este componente é responsável por armazenar e fornecer os seguintes estados para a aplicação:
 * - `products`: Lista de produtos.
 * - `cartItems`: Itens no carrinho de compras.
 * - `loading`: Estado que indica se os dados estão sendo carregados.
 * - `isCartVisible`: Estado que controla a visibilidade do carrinho.
 * 
 * Esses estados são passados via contexto para outros componentes que consomem esses valores.
 * 
 * @component
 * 
 * @param {Object} props - As propriedades do componente.
 * @param {React.ReactNode} props.children - Os componentes filhos que consumirão o contexto.
 * 
 * @returns {JSX.Element} O componente `AppContext.Provider` com os valores de contexto.
 */
function Provider({ children }) {
  // Estados locais
  const [products, setProducts] = useState([]);  // Lista de produtos
  const [cartItems, setCartItems] = useState([]);  // Itens do carrinho
  const [loading, setLoading] = useState(true);  // Indicador de carregamento
  const [isCartVisible, setIsCartVisible] = useState(false);  // Visibilidade do carrinho

  // Objeto que contém os estados compartilhados via contexto
  const value = {
    products,
    setProducts,
    loading, 
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    // Provedor do contexto, passando os valores para os componentes filhos
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any.isRequired,  // Garantindo que o Provider tenha filhos
};
