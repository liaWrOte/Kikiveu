import React from 'react';

// Import composants
import Header from '../microComponents/Header';
import Map from '../microComponents/Map';
import Info from './Info';

import './index.scss';

const Home = () => (
  <>
    <Header />
    <Map />
    <Info />
  </>
);

export default Home;
