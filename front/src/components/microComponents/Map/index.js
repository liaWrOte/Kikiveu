import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';


import { Link } from 'react-router-dom';

import SecondaryUserButton from '../SecondaryUserButton/index';
import TextButton from '../TextButton/index';

import './index.scss';

const Map = ({ changeLat, changeLng, changeMarkerLat, changeMarkerLng }) => {
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

  function AddMarkerToClick() {
    const [markerLat, setMarkerLat] = useState(0);
    const [markerLng, setMarkerLng] = useState(0);
    useMapEvents({
      click(e) {
        const newMarkerLat = e.latlng.lat;
        const newMarkerLng = e.latlng.lng;
        setMarkerLat(newMarkerLat);
        setMarkerLng(newMarkerLng);
      },
    });
    return (
      <>
        <Marker position={[markerLat, markerLng]}>
          <Popup>Coordonnées de votre balade (lat,lng) : {[markerLat, markerLng]}</Popup>
        </Marker>
      </>
    );
  }

  return (
    <div className="map">
      {lat !== null && lng !== null && (
      <MapContainer className="map__component" center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
        <AddMarkerToClick />
        <TileLayer
          attribution='&copy; <a href="">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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
