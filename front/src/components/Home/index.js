import React from 'react';

// Import composants
import Header from '../microComponents/Header';
import Map from '../microComponents/Map';
import Info from './Info';

import './index.scss';

const Home = () => (
  <div className="home">
    <Header className="home__item1" />
    <Map className="home__item2" />
    <Info className="home__item3" />
  </div>
);

export default Home;
