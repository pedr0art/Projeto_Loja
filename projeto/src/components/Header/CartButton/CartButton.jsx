import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './CartButton.css';
import AppContext from '../../../context/AppContext';

/**
 * Componente para exibir o botão do carrinho de compras.
 * 
 * O botão permite alternar a visibilidade do carrinho e exibe o número de itens nele, caso existam.
 * 
 * @component
 * 
 * @returns {JSX.Element} Um botão interativo para abrir/fechar o carrinho e exibir o número de itens.
 */
function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button 
      type="button" 
      className="cart__button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      {/* Ícone do carrinho */}
      <AiOutlineShoppingCart />
      
      {/* Mostra o número de itens no carrinho, se houverem */}
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;
