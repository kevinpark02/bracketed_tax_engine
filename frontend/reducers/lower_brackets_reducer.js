import { RECEIVE_LOWER_BRACKET, REMOVE_LOWER_BRACKET } from "../actions/lower_bracket_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const lowerBracketReducer = (state = {}, action) => {
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
      return action.currentUser.lower_bracket;
    default:
      return state;
  }
};

export default lowerBracketReducer;
