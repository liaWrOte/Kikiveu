import L from 'leaflet';
// delete L.Icon.Default.prototype._getIconUrl;

import marker from '../../../assets/images/character/balanced_character.png';

const userIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: 'leaflet-div-icon',
});

export default userIcon;
