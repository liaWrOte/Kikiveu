import React from 'react';

// Import composants
import PreviousButton from '../../microComponents/PreviousButton';
import MainUserButton from '../../microComponents/MainUserButton';
import TextButton from '../../microComponents/TextButton';
import SecondaryUserButton from '../../microComponents/SecondaryUserButton';

import './chat.scss';

const Chat = () => (
  <div className="chat">
    <div className="chat__wrapper">
      <div className="chat__wrapper__users">
        <MainUserButton className="mainUserButton" />
        <MainUserButton className="mainUserButton" />
        <MainUserButton className="mainUserButton" />
        <MainUserButton className="mainUserButton" />
        <MainUserButton className="mainUserButton" />
      </div>
    </div>
    <div className="chat__messages">
      <div className="chat__messages__singleMessage">
        <SecondaryUserButton className="chat__messages__singleMessage__item1" />
        <p className="chat__messages__singleMessage__item2">Je suis dispo à partir de 14h avec Mango, ça te dit une balade dans le champ d'à côté ?</p>
      </div>
    </div>
    <div className="chat__bottom">
      <PreviousButton />
      <TextButton />
    </div>
  </div>
);

export default Chat;
