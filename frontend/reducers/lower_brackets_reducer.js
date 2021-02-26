import { RECEIVE_LOWER_BRACKET, REMOVE_LOWER_BRACKET } from "../actions/lower_bracket_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const lowerBracketsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_LOWER_BRACKET:
      nextState[action.lowerBracket.boundary] = action.lowerBracket;
      return nextState;
    case REMOVE_LOWER_BRACKET:
      delete nextState[action.lowerBracket.boundary];
      return nextState;
    case RECEIVE_CURRENT_USER:
        if(action.currentUser.lower_brackets) {
            return action.currentUser.lower_brackets;
        } else {
            return {}
        }
    default:
      return state;
  }
};

export default lowerBracketsReducer;
