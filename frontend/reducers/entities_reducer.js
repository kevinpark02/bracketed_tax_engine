import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import clientsReducer from "./clients_reducer";
import bracketsReducer from "./brackets_reducer";
 
const entitiesReducer = combineReducers({
  users: usersReducer,
  clients: clientsReducer,
  brackets: bracketsReducer,
});

export default entitiesReducer;