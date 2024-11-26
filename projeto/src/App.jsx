import React from 'react';
import Header from './components/Header/Header/Header';
import Products from './components/Header/Products/Products';
import Provider from './context/Provider';
import Cart from './components/Header/Cart/Cart';
function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}

export default App;
