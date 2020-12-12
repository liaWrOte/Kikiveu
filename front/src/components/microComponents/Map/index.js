import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from 'react-leaflet';
import L, { Leaflet } from 'leaflet';

import { Link } from 'react-router-dom';
import rideUrl from '../../../assets/images/ride_icon.png';

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
  refreshMapCoords,
  sendMapCoords,
  swLatMap,
  swLongMap,
  neLatMap,
  neLongMap,
  rideEvents,
  haveEventsLocation,
  canPutRideMarker,
}) => {
  const refresh = 'Rafraîchir la carte';

  function MapBounds() {
    const map = useMap();
    console.log(map.getBounds());
    refreshMapCoords(map.getBounds());
    return null;
  }

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
    console.log('ajout du marqueur');
    useMapEvents({
      click(e) {
        const newMarkerLat = e.latlng.lat;
        const newMarkerLng = e.latlng.lng;
        changeMarkerLat(newMarkerLat);
        changeMarkerLng(newMarkerLng);
      },
    });

    // const bounds = Leaflet.latLngBounds([position, position2]);

    return (
      <>
        <Marker position={[markerLat, markerLng]}>
          <Popup>Coordonnées de votre balade (lat,lng) : {[markerLat, markerLng]}</Popup>
        </Marker>
      </>
    );
  }

  // map on all rideEvents
  /* function MapEvents() {
    console.log('mapEvents');
    console.log('rides :', rideEvents);
    const markerEvents = rideEvents.map((rideEvent) => {
      console.log(ride.eventLat);
      <Marker position={[rideEvent.eventLat, rideEvent.eventLng]} />;
    });
    return markerEvents;
  } */

  const rideIcon = new L.Icon({
    iconUrl: rideUrl,
    iconRetinaUrl: rideUrl,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 40),
    className: 'leaflet-div-icon',
  });

  const MapEvents = () => (
    // console.log('mapEvents')
    // console.log('rides :', rideEvents)
    rideEvents.map((rideEvent) => (
      // console.log(ride.eventLat);
      <Marker
        key={rideEvent.eventId}
        position={[rideEvent.eventLat,
          rideEvent.eventLong]}
        icon={rideIcon}
      />
    ))
  );

  function UserPointer() {
    return (
      <Marker position={[lat, lng]} />
    );
  }
  return (
    <div className="map">
      {lat !== null && lng !== null && (
      <MapContainer className="map__component" center={[lat, lng]} zoom={13}>
        {(canPutRideMarker) && (
        <AddMarkerToClick />
        )}
        <MapBounds />
        {(haveEventsLocation) && (
          <MapEvents />
        )}
        <UserPointer />
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
        <TextButton text={refresh} handleClick={sendMapCoords} />
      </div>
    </div>
  );
};

// PropTypes

Map.defaultProps = {
  rideEvents: [],
};

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  markerLat: PropTypes.number,
  markerLng: PropTypes.number,
  changeLat: PropTypes.func.isRequired,
  changeLng: PropTypes.func.isRequired,
  changeMarkerLat: PropTypes.func.isRequired,
  changeMarkerLng: PropTypes.func.isRequired,
  refreshRideEvents: PropTypes.func.isRequired,
  rideEvents: PropTypes.array,
  haveEventsLocation: PropTypes.func.isRequired,
  refreshMapCoords: PropTypes.func.isRequired,
  canPutRideMarker: PropTypes.bool.isRequired,
};

Map.defaultProps = {
  lat: null,
  lng: null,
  markerLat: 0,
  markerLng: 0,
};

export default Map;
