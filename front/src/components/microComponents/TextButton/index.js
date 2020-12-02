import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const TextButton = ({ text }) => (
  <button type="submit" className="button">{text}</button>
);

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextButton;
