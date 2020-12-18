import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const TextButton = ({text, handleClick, buttonClass }) => (
  <button type="submit" className={buttonClass} onClick={handleClick}>{text}</button>
);

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonClass: PropTypes.string,
};

TextButton.defaultProps = {
  buttonClass: '',
  text: 'Bouton',
  handleClick: () => { 
    return console.log('clic');},
};

export default TextButton;
