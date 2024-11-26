import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Ponto de entrada da aplicação.
 * 
 * O arquivo `index.js` é o ponto inicial onde o React renderiza a aplicação. Aqui, o componente `App`
 * é montado no DOM, e o React Strict Mode é ativado para ajudar a identificar problemas no código.
 * 
 * @returns {JSX.Element} O componente `App` renderizado dentro de `React.StrictMode`.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do root do DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
