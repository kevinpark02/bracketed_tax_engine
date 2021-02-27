import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import clientErrorsReducer from "./client_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  client: clientErrorsReducer
});

export default errorsReducer;