import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
// Import composants
import Header from '../../containers/Header';
import Map from '../../containers/Map';
import Info from '../../containers/Home/info';
import ChangeUserProfile from '../../containers/Home/changeUserProfile';
import UserProfile from '../../containers/Home/userProfile';
import Login from '../../containers/login';
import SigninForm from '../../containers/signin';
import SeeOtherUserProfile from '../../containers/Home/seeOtherUserProfile';
import Chat from './Chat';
import KikiVeuContact from './KikiVeuContact';
import Cgu from '../microComponents/Cgu';
import CreateARide from '../../containers/Home/CreateARide';
import Ride from '../../containers/Home/ride';
import PreviousButton from '../microComponents/PreviousButton';

import './index.scss';

const Home = ({ isLogged, loadingRide, loadingProfile, loadingOtherProfile }) => (
  <>
    <Switch>
      <Route exact path="/connexion">
        <Login />
      </Route>
      <Route exact path="/inscription">
        <SigninForm />
      </Route>
      <Route exact path="/cgu">
        <Cgu />
        <PreviousButton />
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
            <Route exact path="/contact">
              <div className=".item3">
                <KikiVeuContact />
              </div>
            </Route>
            <Route exact path="/balade/:slug">
              <>
                {!loadingRide && (
                  <div className=".item3">
                    <Ride />
                  </div>
                )};
                {loadingRide && (
                  <div>Chargement...</div>
                )};
              </>
            </Route>
            <Route exact path="/creer-balade">
              <div className=".item3">
                <CreateARide />
              </div>
            </Route>
            <Route exact path="/1/messages">
              <div className=".item3">
                <Chat />
              </div>
            </Route>
            <Route exact path="/profil/edit">
              <div className=".item4">
                <ChangeUserProfile />
              </div>
            </Route>
            <Route exact path="/profil">
              <>
                {!loadingProfile && (
                  <div className=".item4">
                    <UserProfile />
                  </div>
                )};
                {loadingProfile && (
                  <div>Chargement...</div>
                )};
              </>
            </Route>
            <Route exact path="/:otherUser">
              {!loadingOtherProfile && (
              <div className=".item3">
                <SeeOtherUserProfile />
              </div>
              )}
            </Route>
            <Route exact path="/1/messages/2">
              <div className=".item3">
                <Chat />
              </div>
            </Route>
            <Route exact path="/1/messages/kikiveu-contact">
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

// PropTypes
Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Home;
