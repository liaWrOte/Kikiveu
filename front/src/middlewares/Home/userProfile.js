import axios from 'axios';

import {
  GET_USER_PROFILE,
  saveUserProfileInfos,
  HANDLE_UPDATE_USER_PROFILE,

} from '../../actions/Home/changeUserProfile';

const userProfile = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}` },
  };
  const { auth } = store.getState();
  switch (action.type) {
    case GET_USER_PROFILE:
      console.log('middleware, action FETCH_RECIPES');
      axios.get(`http://localhost:8000/api/v1/dog/${auth.userId}`, config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log(response.data);
          // je veux stocker response.data dans le state => seule possibilité,
          // dispatch une action au store
          store.dispatch(saveUserProfileInfos(response.data[0]));
        });
      next(action);
      break;
    case HANDLE_UPDATE_USER_PROFILE:
      const { changeUserProfile } = store.getState();
      axios.put(`http://localhost:8000/api/v1/user/edit/${auth.userId}`, {
        pseudo: changeUserProfile.pseudo,
        email: auth.email,
        password: auth.password,
        slug: auth.nickname,
      }, config)
        .then((response) => {
          console.log(response.data);
        });
      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userProfile;

