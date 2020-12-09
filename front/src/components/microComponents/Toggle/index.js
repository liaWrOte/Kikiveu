// == Import : npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './index.scss';

// == Composant
const Toggle = ({
  onChange,
  name,
}) => {
  const handleChange = (evt) => {
    const { target } = evt;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    onChange(value, name);
  };

  return (
    <label className="switch" htmlFor="toggleButton">
      <input
        id="toggleButton"
        type="checkbox"
        onChange={handleChange}
        name={name}
      />
      <span className="slider round" />
    </label>
  );
};

// PropTypes
Toggle.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
};

// Valeurs par défaut pour les props
Toggle.defaultProps = {
  name: '',
  onChange: () => {
  },
};

// == Export
export default Toggle;
