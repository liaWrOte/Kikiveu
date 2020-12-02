import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const TextButton = ({ text, handleClick }) => (
  <button type="submit" className="button" onClick={handleClick}>{text}</button>
);

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

TextButton.defaultProps = {
  text: 'Bouton',
  handleClick: () => { 
    return console.log('clic');},
};

export default TextButton;
