import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import composants
import Header from '../microComponents/Header';
import Map from '../microComponents/Map';
import Info from './Info';
import UserProfile from './UserProfile';
import Login from '../Login';
import SigninForm from '../SigninForm';
import SeeOtherUserProfile from './SeeOtherUserProfile';

import './index.scss';

const Home = () => (
  <>
    <Switch>
      <Route exact path="/connexion">
        <Login />
      </Route>
      <Route exact path="/inscription">
        <SigninForm />
      </Route>
      <Route>
        <div className="home">
          <Header className="home__item1" />
          <Map className="home__item2" />
          <Switch>
            <Route exact path="/">
              <Info className="" />
            </Route>
            <Route exact path="/1">
              <SeeOtherUserProfile className="" />
            </Route>
          </Switch>
        </div>
      </Route>
    </Switch>
  </>
);

export default Home;
