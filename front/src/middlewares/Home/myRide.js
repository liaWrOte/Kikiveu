import axios from 'axios';

import {
  GET_MY_RIDE, saveMyRideInfos,
} from '../../actions/Home/myRide';
import {
  HANDLE_POST_COMMENT,
  loadComments,
  LOAD_COMMENTS,
  saveComments,
} from '../../actions/Home/ride';

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
      axios.get(`http://localhost:8000/api/v1/event/user/${auth.userId}`, config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log(response.data[0]);
          // je veux stocker response.data dans le state => seule possibilité,
          // dispatch une action au store
          store.dispatch(saveMyRideInfos(response.data[0]));
          store.dispatch(loadComments());
        })
        .catch((error) => {
        // traitement si réponse est une erreur
          console.log('erreur :', error);
        });
      next(action);
      break;
    case HANDLE_POST_COMMENT:
      // je récupère les données qui m'intéressent : email et mdp
      axios.post('http://localhost:8000/api/v1/comment/add', {
        users: auth.userId,
        body: myRide.comment,
        events: myRide.myRideInfos.eventId,
      },
      config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log('middleware : post comment');
          console.log(response);
          store.dispatch(loadComments());
          // console.log(localStorage.getItem('token'));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    case LOAD_COMMENTS:
      axios.get(`http://localhost:8000/api/v1/comment/${myRide.myRideInfos.eventId}`,
        config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log('middleware : get all comments');
          console.log(response);
          store.dispatch(saveComments(response.data));
          console.log(response);
          // console.log(localStorage.getItem('token'));
          axios.get(`http://localhost:8000/api/v1/dog/${myRide.myRideInfos.userId}`,
            config)
            .then((response2) => {
            // traitement si réponse est un succès
              console.log('middleware : get all avatar');
              console.log(response2);
            })
            .catch((error2) => {
              console.log(error2);
            });
        })
        .catch((error1) => {
          console.log(error1);
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userProfile;
