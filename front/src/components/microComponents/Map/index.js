import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapControl,
} from 'react-leaflet';

import LocateControl from 'react-leaflet-locate-control';

import { Link } from 'react-router-dom';

import SecondaryUserButton from '../SecondaryUserButton/index';
import TextButton from '../TextButton/index';

import './index.scss';

const Map = () => {
  // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const refresh = 'Rafraîchir la carte';

  const success = (position) => {
    const coord = position.coords;

    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
    console.log(coord.latitude);
    console.log(coord.longitude);
  };
  // gérer l'erreur avec un setLat et setLng sur Paris par exemple
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <div className="map">
      {lat !== null && lng !== null && (
      <MapContainer className="map__component" center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      ) }

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
        <TextButton text={refresh} />
      </div>
    </div>
  );
};

export default Map;
