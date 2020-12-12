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
  id,
  inputClass,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <input
    // infos de base
      id={id}
      value={value}
      onChange={handleChange}
      name={name}
      placeholder={placeholder}
      type={type}
      className={inputClass}
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
  onChange: PropTypes.func,
  id: PropTypes.string,
  inputClass: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
Input.defaultProps = {
  id: '',
  value: '',
  type: 'text',
  placeholder: '',
  onChange: () => {
  },
};

// == Export
export default Input;
