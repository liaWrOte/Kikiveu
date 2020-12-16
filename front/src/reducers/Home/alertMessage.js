import {
  ERROR_LOGIN,
  HANDLE_ERROR_SIGNIN,
  HANDLE_ERROR_PASSWORD
} from '../../actions/Home/alertMessage';

const initialState = {
  alertLoginStatus: false,
  alertStatusSigninForm: false,
  alertPasswordStatus: false,
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

    case HANDLE_ERROR_SIGNIN:
      return {
        ...state,
        alertStatusSigninForm: !state.alertStatusSigninForm,
      };

    case HANDLE_ERROR_PASSWORD:
      return {
        ...state,
        alertPasswordStatus: !state.alertPasswordStatus,
      };

    default: return { ...state };
  }
};

export default alertMessage;
