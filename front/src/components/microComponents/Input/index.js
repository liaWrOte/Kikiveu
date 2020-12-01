// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './index.scss';

// == Composant
const Input = ({placeholder}) => (
  <input
    // infos de base
    type="text"
    className="input"
    name="message"
    placeholder={placeholder}
  />

);

// PropTypes
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

// == Export
export default Input;
