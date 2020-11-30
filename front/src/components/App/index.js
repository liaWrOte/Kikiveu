// == Import npm
import React from 'react';

// Test des composants
import Emoji from '../microComponents/Emoji';
import Input from '../microComponents/Input';
import Cgu from '../microComponents/Cgu';
import Toggle from '../microComponents/Toggle';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <h1>Composant : App</h1>
    <Emoji />
    <Input />
    <Cgu />
    <Toggle />
  </div>
);

// == Export
export default App;
