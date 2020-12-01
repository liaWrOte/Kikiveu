import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import SecondaryUserButton from '../SecondaryUserButton/index';

import './index.scss';

const Map = () => (
  <div className="map">
    <MapContainer className="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
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
    <SecondaryUserButton className="map__secondaryUserButton" />
  </div>
);

export default Map;
