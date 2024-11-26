import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types"; // Importa o pacote prop-types
import React from "react";
import useAuth from "../hooks/useAuth";
import Signup from "../pages/SignUp";
import Signin from "../pages/Signin";
import Home from "../pages/Home";

// Componente Private ajustado
const Private = ({ Component }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Component /> : <Signin />;
};

// Validação das props para o componente Private
Private.propTypes = {
  Component: PropTypes.elementType.isRequired, // `Component` deve ser um componente React e é obrigatório
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {/* Corrigido para passar 'Component' em vez de 'Item' */}
          <Route path="/home" element={<Private Component={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
