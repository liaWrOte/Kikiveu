import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
  latLngBounds,
} from 'react-leaflet';
import L, { Leaflet } from 'leaflet';

import { Link } from 'react-router-dom';

import SecondaryUserButton from '../SecondaryUserButton/index';
import TextButton from '../TextButton/index';

import './index.scss';

const Map = ({
  lat,
  lng,
  markerLat,
  markerLng,
  changeLat,
  changeLng,
  changeMarkerLat,
  changeMarkerLng,
}) => {
  const refresh = 'Rafraîchir la carte';

  function MapBounds() {
    const map = useMap();
    console.log(map.getBounds());
    return null;
  };

  const success = (position) => {
    // const coord = position.coords;
    changeLat(position.coords.latitude);
    changeLng(position.coords.longitude);
    // console.log(coord.latitude);
    // console.log(coord.longitude);
  };
  // gérer l'erreur avec un setLat et setLng sur Paris par exemple
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  function AddMarkerToClick() {
    useMapEvents({
      click(e) {
        const newMarkerLat = e.latlng.lat;
        const newMarkerLng = e.latlng.lng;
        changeMarkerLat(newMarkerLat);
        changeMarkerLng(newMarkerLng);
      },
    });

    //const bounds = Leaflet.latLngBounds([position, position2]);

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
      <MapContainer className="map__component" center={[lat, lng]} zoom={13}>
        <AddMarkerToClick />
        <MapBounds />
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

// PropTypes
Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  markerLat: PropTypes.number,
  markerLng: PropTypes.number,
  changeLat: PropTypes.func.isRequired,
  changeLng: PropTypes.func.isRequired,
  changeMarkerLat: PropTypes.func.isRequired,
  changeMarkerLng: PropTypes.func.isRequired,
};


Map.defaultProps = {
  lat: null,
  lng: null,
  markerLat: 0,
  markerLng: 0,
};


export default Map;
