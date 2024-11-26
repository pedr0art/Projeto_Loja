import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import './Loading.css';

/**
 * Componente para exibir um indicador de carregamento.
 * 
 * Este componente exibe um ícone de carregamento, útil para sinalizar ao usuário que uma operação está em andamento.
 * 
 * @component
 * 
 * @returns {JSX.Element} Um ícone animado indicando carregamento.
 */
function Loading() {
  return <BiLoaderAlt className="loading" />;
}

export default Loading;
