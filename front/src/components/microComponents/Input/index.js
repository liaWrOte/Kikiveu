// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './index.scss';

// == Composant
const Input = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `input-${name}`;

  return (
    <input
    // infos de base
      id={inputId}
      value={value}
      onChange={handleChange}
      type={type}
      className="input"
      name={name}
      placeholder={placeholder}
    />
  );
};

// PropTypes
Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Input.defaultProps = {
  value: '',
  type: 'text',
  placeholder: '',
};

// == Export
export default Input;
