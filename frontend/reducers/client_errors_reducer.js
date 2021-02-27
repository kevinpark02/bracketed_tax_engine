import {
  RECEIVE_CLIENT_ERRORS,
  REMOVE_CLIENT_ERRORS,
} from "../actions/client_actions";

const clientErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CLIENT_ERRORS:
      return action.errors;
    case REMOVE_CLIENT_ERRORS:
      return [];
    default:
      return state;
  }
};

export default clientErrorsReducer;
