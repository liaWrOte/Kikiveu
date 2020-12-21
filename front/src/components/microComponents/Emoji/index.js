// == Import
import React from 'react';
import PropTypes from 'prop-types';

import defaultEmoji from '../../../assets/images/mood/calm_mood.png';

// == Import SCSS

import './index.scss';

// == Composant Emoji
// utilisé pour les traits de caractères sur le profil + état de santé + humeur du jour
const Emoji = ({ src }) => (
  <img src={src} alt="emoji" className="emoji__image" />
);

Emoji.defaultProps = {
  src: defaultEmoji,
};

// Validation des props
Emoji.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

// == Export
export default Emoji;


