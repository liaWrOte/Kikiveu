// == Import
import React from 'react';
// import PropTypes from 'prop-types';

import emojiTest from '../../../assets/images/character/curious_character.png';
// == Import SCSS

import './index.scss';

// == Composant Emoji
// utilisé pour les traits de caractères sur le profil + état de santé + humeur du jour
const Emoji = ({}) => (
  <div className="emoji">
    <img src={emojiTest} alt="emoji" className="emoji__image" />
  </div>
);

// Validation des props

// == Export
export default Emoji;
