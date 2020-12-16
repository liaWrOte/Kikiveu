// == Import
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS

import './index.scss';

// == Composant Emoji
// utilisé pour les traits de caractères sur le profil + état de santé + humeur du jour
const AlertMessage = ({ message }) => (
  <p className="alertMessage">{message}</p>
);

// Validation des props
AlertMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

// == Export
export default AlertMessage;
