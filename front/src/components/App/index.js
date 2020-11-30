// == Import npm
import React from 'react';

// == Import
import TextButton from '../microComponents/TextButton';
import PreviousButton from '../microComponents/PreviousButton';
import MainUserButton from '../microComponents/MainUserButton';
import Map from '../microComponents/Map';

// == Composant
const App = () => (
  <div className="app">
    <TextButton />
    <PreviousButton />
    <MainUserButton />
    <Map />
  </div>
);

// == Export
export default App;
