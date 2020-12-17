import axios from 'axios';

import {
  GET_MY_RIDE,
  getMyRide,
  saveMyRideInfos,
  HANDLE_UPDATE_RIDE,
  DELETE_MY_RIDE,
  hasRide,
} from '../../actions/Home/myRide';

import {
  HANDLE_POST_COMMENT,
  loadComments,
  LOAD_COMMENTS,
  saveComments,
} from '../../actions/Home/ride';

const myRide = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}` },
  };
  const { auth } = store.getState();
  const { myRide } = store.getState();
  const { changeMyRide } = store.getState();
  switch (action.type) {
    case GET_MY_RIDE:
      console.log('middleware, action GET_MY_RIDE');
      axios.get(`http://localhost:8000/api/v1/event/user/${auth.userId}`, config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log(response.data[0]);
          // je veux stocker response.data dans le state => seule possibilité,
          // dispatch une action au store
          if (response.status !== 200) {
            store.dispatch(hasRide(false));
          }
          else if (response.status === 200) {
            store.dispatch(hasRide(true));
            store.dispatch(saveMyRideInfos(response.data[0]));
            store.dispatch(loadComments());
          }
        })
        .catch((error) => {
        // traitement si réponse est une erreur
          console.log('erreur :', error);
          store.dispatch(hasRide(false));
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

    case HANDLE_UPDATE_RIDE:
      axios.put(`http://localhost:8000/api/v1/event/edit/${myRide.myRideInfos.eventId}`, {
        eventLat: changeMyRide.markerLat,
        eventLong: changeMyRide.markerLng,
        description: changeMyRide.description,
        tags: changeMyRide.tags,
        datetime: `${changeMyRide.date} ${changeMyRide.time}`,
        duration: changeMyRide.duration,
        maxParticipant: changeMyRide.maxParticipant, // problème ici
        slug: auth.nickname,
        users: auth.userId,
      }, config)
        .then((response) => {
          console.log(response);
          store.dispatch(getMyRide());
        })
        .catch((error) => {
          // traitement si réponse est une erreur
          console.log('erreur :', error);
        });

      next(action);
      break;

    case DELETE_MY_RIDE:
      console.log('middleware, action GET_MY_RIDE');
      axios.delete(`http://localhost:8000/api/v1/event/delete/${myRide.myRideInfos.eventId}`, config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log(response);
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
export default myRide;
