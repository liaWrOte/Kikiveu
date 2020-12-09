// == Import : npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './index.scss';

// == Composant
const Toggle = ({
  onChange,
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
        name="status"
      />
      <span className="slider round" />
    </label>
  );
};

// PropTypes
Toggle.propTypes = {
  onChange: PropTypes.func.isRequired,
};

// == Export
export default Toggle;
