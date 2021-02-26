import { RECEIVE_BRACKET, REMOVE_BRACKET } from '../actions/bracket_actions';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const bracketsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_BRACKET:
            nextState[action.bracket.boundary] = action.bracket
            return nextState;
        case REMOVE_BRACKET:
            delete nextState[action.bracket.boundary];
            return nextState;
        case RECEIVE_CURRENT_USER:
            return action.currentUser.brackets
        default:
            return state;
    }
}

export default bracketsReducer;