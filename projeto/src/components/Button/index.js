import React from "react";
import PropTypes from "prop-types";
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
};

Button.propTypes = {
  Text: PropTypes.string.isRequired, // `Text` é obrigatório e deve ser uma string
  onClick: PropTypes.func.isRequired, // `onClick` é obrigatório e deve ser uma função
  Type: PropTypes.string, // `Type` é opcional e deve ser uma string
};

export default Button;
