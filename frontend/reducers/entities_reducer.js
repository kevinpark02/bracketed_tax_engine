import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import clientsReducer from "./clients_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  clients: clientsReducer,
});

export default entitiesReducer;