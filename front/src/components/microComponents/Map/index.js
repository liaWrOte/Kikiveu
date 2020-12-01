import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import SecondaryUserButton from '../SecondaryUserButton/index';
import TextButton from '../TextButton/index';

import './index.scss';

const Map = () => (
  <div className="map">
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
        <SecondaryUserButton className="map__users__user" />
      </div>
      <div className="map__users__user">
        <SecondaryUserButton className="map__users__user" />
      </div>
      <div className="map__users__user">
        <SecondaryUserButton className="map__users__user" />
      </div>

    </div>
    <div className="map__refresh">
      <TextButton />
    </div>
    
  </div>
);

export default Map;
