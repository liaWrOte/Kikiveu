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
  getUserProfile,
  refreshMapCoords,
  sendMapCoords,
  loadingMapCoords,
  rideEvents,
  haveEventsLocation,
  canPutRideMarker,
  getRideId,
  getMyRide,
  getUsers,
  usersOnMap,
  getOtherUserProfileId,
  getOtherUserProfile,
  isLogged,
}) => {
  const refresh = 'Rechercher dans la zone';
  console.log(usersOnMap);

  function MapBounds() {
    const map = useMap();
    console.log(canPutRideMarker);
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
    if (isLogged === true) {
      getUserProfile();
      getMyRide();
    }
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

  /* const rideIcon = new L.Icon({
    iconUrl: rideUrl,
    iconRetinaUrl: rideUrl,
    iconAnchor: null,
    popupAnchor: '[rideEvent.eventLat,
      rideEvent.eventLong]',
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 40),
    className: 'leaflet-div-icon',
  }); */

  const MapEvents = () => (
    // console.log('mapEvents')
    // {`/balade/${rideEvent.eventSlug}`}
    rideEvents.map((rideEvent) => (
      <Marker
        key={rideEvent.eventId}
        position={[rideEvent.eventLat,
          rideEvent.eventLong]}
        icon={new L.Icon({
          iconUrl: rideUrl,
          iconRetinaUrl: rideUrl,
          iconAnchor: null,
          popupAnchor: [rideEvent.eventLat,
            rideEvent.eventLong],
          shadowUrl: null,
          shadowSize: null,
          shadowAnchor: null,
          iconSize: new L.Point(30, 30),
          className: `leaflet-div-icon,${rideEvent.eventId}`,
        })}
      >
        <Popup>
          <Link to={`/balade/${rideEvent.eventSlug}`} onClick={() => getRideId(rideEvent.eventId)}>Voir la balade...</Link>
        </Popup>
      </Marker>
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

      )};
      <div className="map__users">
        {(usersOnMap) && (
          usersOnMap.map((user) => (
            <div className="map__users__user">
              <Link to={`/${user.userSlug}`} onClick={() => getOtherUserProfile(getOtherUserProfileId(user.userId))}>
                <img src={user.dogAvatar} alt={user.userPseudo} />
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="map__refresh">
        <TextButton text={refresh} handleClick={() => sendMapCoords()} buttonClass="button_small" />
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
  rideEvents: PropTypes.array,
  haveEventsLocation: PropTypes.bool.isRequired,
  refreshMapCoords: PropTypes.func.isRequired,
  canPutRideMarker: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired,
  getRideId: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  sendMapCoords: PropTypes.func.isRequired,
  getUserProfile: PropTypes.func.isRequired,
};

Map.defaultProps = {
  lat: null,
  lng: null,
  markerLat: 0,
  markerLng: 0,
};

export default Map;
