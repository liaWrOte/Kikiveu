import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import { Link } from 'react-router-dom';
import { LocateControl } from 'react-leaflet-locate-control';

import SecondaryUserButton from '../SecondaryUserButton/index';
import TextButton from '../TextButton/index';

import './index.scss';

const Map = () => {
  const refresh = 'Rafraîchir la carte';
  const locateOptions = {
    position: 'topright',
    strings: {
        title: 'Show me where I am, yo!'
    },
    onActivate: () => {} // callback before engine starts retrieving locations
  }
  // const currentPosition = Locate;
  const maposition = () => {
    console.log(currentPosition);
  };
  return (
    <div className="map"> 
    <LocateControl options={locateOptions} startDirectly/>
      <MapContainer className="map__component" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      
        <TileLayer
          attribution='&copy; <a href="">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="map__users">
        <div className="map__users__user">
          <Link to="/2"><SecondaryUserButton className="map__users__user" /></Link>
        </div>
        <div className="map__users__user">
          <Link to="/2"><SecondaryUserButton className="map__users__user" /></Link>
        </div>
        <div className="map__users__user">
          <Link to="/2"><SecondaryUserButton className="map__users__user" /></Link>
        </div>
      </div>
      <div className="map__refresh">
        <TextButton text={refresh} handleClick={maposition} />
      </div>
    </div>
  );
};

export default Map;
