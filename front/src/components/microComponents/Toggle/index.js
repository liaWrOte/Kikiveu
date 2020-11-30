// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import : local
import './index.scss';

// == Composant
const Toggle = () => (
  <label className="switch" htmlFor="toggleButton">
    <input id="toggleButton" type="checkbox" />
    <span className="slider round"/>
  </label>
);

// PropTypes

// == Export
export default Toggle;
