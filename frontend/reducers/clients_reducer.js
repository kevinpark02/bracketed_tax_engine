import { RECEIVE_CLIENT, REMOVE_CLIENT } from '../actions/client_actions';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const clientsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CLIENT:
            nextState[action.client.id] = action.client
            return nextState;
        case REMOVE_CLIENT:
            delete nextState[action.clientId];
            return nextState;
        case RECEIVE_CURRENT_USER:
            if(action.currentUser.clients) {
                return action.currentUser.clients
            } else {
                return {}
            }
        default:
            return state;
    };
};

export default clientsReducer;