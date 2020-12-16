import axios from 'axios';

import {
  GET_MY_RIDE, saveMyRideInfos
} from '../../actions/Home/myRide';

const userProfile = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}` },
  };
  const { auth } = store.getState();
  const { myRide } = store.getState();
  switch (action.type) {
    case GET_MY_RIDE:
      console.log('middleware, action GET_MY_RIDE');
      axios.get(`http://localhost:8000/api/v1/event/${myRide.id}`, config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log(response.data);
          // je veux stocker response.data dans le state => seule possibilité,
          // dispatch une action au store
          store.dispatch(saveMyRideInfos(response.data));
        })
        .catch((error) => {
        // traitement si réponse est une erreur
          console.log('erreur :', error);
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userProfile;
