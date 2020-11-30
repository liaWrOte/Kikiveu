// == Import npm
import React from 'react';

// Test des composants
import Emoji from '../microComponents/Emoji';
import Input from '../microComponents/Input';
import Cgu from '../microComponents/Cgu';
import Toggle from '../microComponents/Toggle';

// == Import
import TextButton from '../microComponents/TextButton';
import PreviousButton from '../microComponents/PreviousButton';
import MainUserButton from '../microComponents/MainUserButton';
import Map from '../microComponents/Map';
import Header from '../microComponents/Header';
import UserOnMap from '../microComponents/UserOnMap';

// == Composant
const App = () => (
  <div className="app">

    //<img src={reactLogo} alt="react logo" />
    <h1>Composant : App</h1>
    <Emoji />
    <Input />
    <Cgu />
    <Toggle />

    <Header />
    <TextButton />
    <PreviousButton />
    <MainUserButton />
    <Map />
    <UserOnMap />

  </div>
);

// == Export
export default App;
