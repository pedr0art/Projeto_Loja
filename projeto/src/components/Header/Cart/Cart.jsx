import React from 'react';
import './Cart.css';
import CartItem from '../../CartItem/CartItem';
import { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import formatCurrency from '../../../utils/formatCurrency';

/**
 * Componente para exibir o carrinho de compras.
 * 
 * @component
 * 
 * @returns {JSX.Element} Um componente que representa o carrinho de compras com itens adicionados e o preço total.
 */
function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  /**
   * Calcula o preço total dos itens no carrinho.
   * 
   * @type {number}
   */
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      {/* Lista os itens do carrinho */}
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      {/* Exibe o preço total formatado */}
      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
