import React from "react";
import PropTypes from "prop-types"; // Importação do pacote prop-types
import * as C from "./styles";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

// Validação das props
Input.propTypes = {
  type: PropTypes.string.isRequired, // `type` é obrigatório e deve ser uma string
  placeholder: PropTypes.string, // `placeholder` é opcional e deve ser uma string
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // `value` é obrigatório e pode ser string ou número
  onChange: PropTypes.func.isRequired, // `onChange` é obrigatório e deve ser uma função
};

export default Input;
