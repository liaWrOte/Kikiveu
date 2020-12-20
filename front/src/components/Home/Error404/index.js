import React from 'react';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import TextButton from '../../microComponents/TextButton';
import SecondaryUserButton from '../../microComponents/SecondaryUserButton';

import './error404.scss';

const Error404 = () => (
  <div className="error404">
    <p>Oops, vous vous êtes perdu(e) !</p>
    <TextButton text="Retour à l'accueil" className="small_button_green" />
  </div>
);

export default Error404;
