import React from "react";
import NavbarContainer from "./navbar/navbar_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
</div>
);

export default App;
