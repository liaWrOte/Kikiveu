import axios from 'axios';

import {
  GET_MY_RIDE,
  getMyRide,
  saveMyRideInfos,
  HANDLE_UPDATE_RIDE,
  DELETE_MY_RIDE,
  hasRide,
  HANDLE_POST_MY_COMMENT,
  loadMyComments,
  LOAD_MY_COMMENTS,
  saveMyComment,
} from '../../actions/Home/myRide';


import apiUrl from '../env';

const myRide = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}` },
  };
  const { auth } = store.getState();
  const { myRide } = store.getState();
  const { map } = store.getState();
  switch (action.type) {
    case GET_MY_RIDE:
      console.log('middleware, action GET_MY_RIDE');
      axios.get(`${apiUrl}/event/user/${auth.userId}`, config)
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
            store.dispatch(loadMyComments());
          }
        })
        .catch((error) => {
        // traitement si réponse est une erreur
          console.log('erreur :', error);
          store.dispatch(hasRide(false));
        });
      next(action);
      break;
    case HANDLE_POST_MY_COMMENT:
      // je récupère les données qui m'intéressent : email et mdp
      axios.post(`${apiUrl}/comment/add`, {
        users: auth.userId,
        body: myRide.comment,
        events: myRide.myRideInfos.eventId,
      },
      config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log('middleware : post comment');
          console.log(response);
          store.dispatch(loadMyComments());
          // console.log(localStorage.getItem('token'));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    case LOAD_MY_COMMENTS:
      axios.get(`${apiUrl}/comment/${myRide.myRideInfos.eventId}`,
        config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log('middleware : get all comments');
          console.log(response);
          store.dispatch(saveMyComment(response.data));
          console.log(response);
          // console.log(localStorage.getItem('token'));
          axios.get(`${apiUrl}/dog/${myRide.myRideInfos.userId}`,
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

      const string = myRide.myRideInfos.eventDatetime;
      const date = new Date(string);
    
      function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      };
      const formatedDate = addZero(date.getDate())+'/'+addZero((date.getMonth()+1))+'/'+date.getFullYear();
      const formatedTime = addZero(date.getHours()) + ':' + addZero(date.getMinutes());

        const tagsFormat = [`${myRide.myRideInfos.tagsId}`];
        
      axios.put(`${apiUrl}/event/edit/${myRide.myRideInfos.eventId}`, {
        eventLat: map.markerLat,
        eventLong: map.markerLng,
        description: myRide.myRideInfos.eventDescription,
        tags: tagsFormat,
        datetime: `${formatedDate} ${formatedTime}`,
        duration: myRide.myRideInfos.eventDuration,
        maxParticipant: myRide.myRideInfos.eventMaxParticipant, // problème ici
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
      axios.delete(`${apiUrl}/event/delete/${myRide.myRideInfos.eventId}`, config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log(response);
          store.dispatch(hasRide(false));
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
