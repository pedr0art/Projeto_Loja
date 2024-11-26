import React, { useContext } from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import './CartItem.css';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

/**
 * Componente para exibir um item no carrinho de compras.
 * 
 * @component
 * @param {Object} props - As propriedades do componente.
 * @param {Object} props.data - Os dados do item no carrinho.
 * @param {string} props.data.id - ID único do produto.
 * @param {string} props.data.thumbnail - URL da imagem do produto.
 * @param {string} props.data.title - Nome do produto.
 * @param {number} props.data.price - Preço do produto.
 * 
 * @returns {JSX.Element} Um componente representando um item no carrinho.
 */
function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  /**
   * Remove o item atual do carrinho de compras.
   */
  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

/**
 * Define os tipos de propriedade esperados pelo componente.
 * 
 * @prop {Object} data - Os dados do item no carrinho.
 */
CartItem.propTypes = {
  data: propTypes.object.isRequired,
};
