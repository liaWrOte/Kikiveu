// == Import npm
import React from 'react';

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
