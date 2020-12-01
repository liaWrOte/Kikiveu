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
import Chat from './Chat';
import KikiVeuContact from './Chat/KikiVeuContact';

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
          <div className=".item1">
            <Header />
          </div>
          <div className=".item2">
            <Map />
          </div>
          <Switch>
            <Route exact path="/">
              <div className=".item3">
                <Info />
              </div>
            </Route>
            <Route exact path="/1">
              <div className=".item3">
                <KikiVeuContact />
              </div>
            </Route>

          </Switch>
        </div>
      </Route>
    </Switch>
  </>
);

export default Home;
