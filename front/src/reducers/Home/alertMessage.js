import {
  ERROR_LOGIN,
} from '../../actions/Home/alertMessage';

const initialState = {
  alertLoginStatus: false,
};

const alertMessage = (state = initialState, action = {}) => {
  switch (action.type) {
    case ERROR_LOGIN:
      // console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        alertLoginStatus: !state.alertLoginStatus,
      };

    default: return { ...state };
  }
};

export default alertMessage;
