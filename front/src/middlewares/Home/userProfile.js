import axios from 'axios';

import {
  GET_USER_PROFILE,
  DELETE_USER_PROFILE,
  saveUserProfileInfos,
  HANDLE_UPDATE_USER_PROFILE,
  saveDogInfos,
  saveOtherUserInfo,
  saveOtherUserDogInfo,
  GET_OTHER_USER_PROFILE,
} from '../../actions/Home/changeUserProfile';

import apiUrl from '../env';

const userProfile = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}` },
  };
  const { auth } = store.getState();
  switch (action.type) {
    case GET_USER_PROFILE:
      console.log('middleware, action GET_USER_PROFILE');
      axios.get(`${apiUrl}/dog/${auth.userId}`, config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log(response.data);
          // je veux stocker response.data dans le state => seule possibilité,
          // dispatch une action au store
          store.dispatch(saveUserProfileInfos(response.data[0]));
        })
        .catch((error) => {
        // traitement si réponse est une erreur
          console.log('erreur :', error);
        });

      next(action);
      break;

    case GET_OTHER_USER_PROFILE:
      const { map } = store.getState();
      console.log('middleware, action GET_USER_PROFILE');
      console.log(map.otherUserProfileId);
      axios.get(`${apiUrl}/user/${map.otherUserProfileId}`, config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log(response.data[0]);
          store.dispatch(saveOtherUserInfo(response.data[0]));
          axios.get(`${apiUrl}/dog/${map.otherUserProfileId}`, config)
            .then((response2) => {
              // traitement si réponse est un succès
              console.log(response2.data);
              store.dispatch(saveOtherUserDogInfo(response2.data[0]));
              // je veux stocker response.data dans le state => seule possibilité,
              // dispatch une action au store
            })
            .catch((error) => {
            // traitement si réponse est une erreur
              console.log('erreur :', error);
            });
        })
        .catch((error2) => {
        // traitement si réponse est une erreur
          console.log('erreur :', error2);
        });

      next(action);
      break;

    case HANDLE_UPDATE_USER_PROFILE:
      //const { changeUserProfile } = store.getState();
      const { userProfile } = store.getState();
      axios.put(`${apiUrl}/user/edit/${auth.userId}`, {
        pseudo: userProfile.userInfos.pseudo,
        email: auth.email,
        password: auth.password,
        slug: userProfile.userInfos.pseudo,
      }, config)
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserProfileInfos(response.data));
          axios.put(`${apiUrl}/dog/edit/${userProfile.userInfos.dogId}`, {
            mood: userProfile.userInfos.moodId,
            state: userProfile.userInfos.stateId,
            castrate: userProfile.userInfos.castrate,
          }, config)
            .then((response2) => {
              console.log(response2);
              store.dispatch(saveDogInfos(response2.data));
              axios.get(`${apiUrl}/dog/${auth.userId}`, config)
                .then((response3) => {
                  // traitement si réponse est un succès
                  console.log(response3.data);
                  // je veux stocker response.data dans le state => seule possibilité,
                  // dispatch une action au store
                  store.dispatch(saveUserProfileInfos(response3.data[0]));
                });
            })
            .catch((error) => {
              // traitement si réponse est une erreur
              console.log('erreur :', error);
            });
        })
        .catch((error) => {
          // traitement si réponse est une erreur
          console.log('erreur :', error);
        });
      next(action);
      break;

    case DELETE_USER_PROFILE:
      console.log('middleware, action GET_MY_RIDE');
      axios.delete(`${apiUrl}/user/delete/${auth.userId}`, config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log(response);
          if (response.status === 200) {
            window.location = ('/connexion');
          }
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
