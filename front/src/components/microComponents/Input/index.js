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
  checked,
  id,
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
      className="input"
      name={name}
      placeholder={placeholder}
      type={type}
      checked={checked}
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
  checked: PropTypes.bool,
};

// Valeurs par défaut pour les props
Input.defaultProps = {
  id: '',
  value: '',
  type: 'text',
  placeholder: '',
  checked: false,
  onChange: () => {
  },
};

// == Export
export default Input;
