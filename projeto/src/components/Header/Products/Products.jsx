import React, { useEffect, useContext } from 'react';

import './Products.css';
import fetchProducts from '../../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

import Loading from '../Loading/Loading';
import AppContext from '../../../context/AppContext';

/**
 * Componente para exibir a lista de produtos.
 * 
 * Este componente:
 * - Busca produtos da API ao ser montado.
 * - Exibe um indicador de carregamento enquanto os dados são carregados.
 * - Renderiza uma lista de cartões de produtos.
 * 
 * @component
 * 
 * @returns {JSX.Element} Uma lista de produtos ou um indicador de carregamento.
 */
function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  /**
   * Busca os produtos ao montar o componente.
   * 
   * - Chama a função `fetchProducts` para buscar produtos com o termo "motorola".
   * - Atualiza o estado global com os produtos carregados.
   * - Desativa o indicador de carregamento ao concluir a busca.
   */
  useEffect(() => {
    fetchProducts('motorola').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, [setProducts, setLoading]);

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {/* Renderiza cada produto como um cartão */}
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  );
}

export default Products;
