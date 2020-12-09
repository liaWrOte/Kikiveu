import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Message = ({ message, hideMessage }) => {
  useEffect(() => {
    console.log('Le composant Message apparaît');
    const timeoutId = setTimeout(() => {
      console.log('Le message va disparaître');
      // je demande à App de faire disparaître le message
      hideMessage();
    }, 1500);

    // quand le message change, je dois annuler le timer avant d'en lancer un nouveau
    // en fait, je veux "nettoyer" le résultat de l'effet précédent
    // https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
    // si on retourne une fonction dans useEffect, c'est une fonction de nettoyage
    // elle sera appelée automatiquement avant l'application du prochain effet
    return () => {
      console.log('on annule le timer');
      clearTimeout(timeoutId);
    };
  }, [message]);
  return (

    <div className="message__text">
      <p>salutklejdfozihncfzjnoiehzjnzije</p>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  hideMessage: PropTypes.func.isRequired,
};

export default Message;
