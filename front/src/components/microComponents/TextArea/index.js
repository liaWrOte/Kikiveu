// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './index.scss';

// == Composant
const TextArea = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const textareaId = `input-${name}`;

  return (
    <textarea
    // infos de base
      id={textareaId}
      value={value}
      onChange={handleChange}
      type={type}
      className="textarea"
      name={name}
      placeholder={placeholder}
      rows="6"
      cols="20"
    />
  );
};

// PropTypes
TextArea.propTypes = {
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
TextArea.defaultProps = {
  value: '',
  type: 'text',
  placeholder: '',
};

// == Export
export default TextArea;
