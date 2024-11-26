import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';
import './ProductCard.css';
import formatCurrency from '../../../utils/formatCurrency';
import AppContext from '../../../context/AppContext';

/**
 * Componente para exibir informações de um produto e adicionar ao carrinho.
 * 
 * Este componente mostra:
 * - Imagem do produto.
 * - Nome do produto.
 * - Preço do produto.
 * - Um botão para adicionar o produto ao carrinho.
 * 
 * @component
 * @param {Object} props - As propriedades do componente.
 * @param {Object} props.data - Dados do produto a serem exibidos.
 * @param {string} props.data.title - Título do produto.
 * @param {string} props.data.thumbnail - URL da imagem do produto.
 * @param {number} props.data.price - Preço do produto.
 * 
 * @returns {JSX.Element} Um card representando o produto com opção de adicioná-lo ao carrinho.
 */
function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  /**
   * Adiciona o produto atual ao carrinho.
   */
  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  };

  return (
    <section className="product-card">
      {/* Imagem do produto */}
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image" 
      />
      {/* Informações do produto */}
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      {/* Botão para adicionar ao carrinho */}
      <button 
        type="button" 
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

/**
 * Propriedades esperadas pelo componente.
 * 
 * @prop {Object} data - Dados do produto.
 * @prop {string} data.title - Título do produto.
 * @prop {string} data.thumbnail - URL da imagem do produto.
 * @prop {number} data.price - Preço do produto.
 */
ProductCard.propTypes = {
  data: propTypes.shape({
    title: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
  }).isRequired,
};
