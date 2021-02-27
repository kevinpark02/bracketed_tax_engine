import React from "react";
import NavbarContainer from "./Navbar/navbar_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Dashboard from "./dashboard/dashboard";
import ClientIndexContainer from "./client/client_index_container";
import CreateClientContainer from "./client/create_client_container";
import BracketIndexContainer from "./bracket/bracket_index_container";
import LowerBracketIndexContainer from "./lower_bracket/lower_bracket_index_container";
import HomePage from "./home/home";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route } from 'react-router-dom';

const App = () => (
  <div className="background">
    <header>
      <NavbarContainer />
    </header>

    <AuthRoute exact path="/" component={HomePage} />

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />

    <ProtectedRoute path="/dashboard" component={Dashboard} />
    <ProtectedRoute path="/new_client" component={CreateClientContainer} />
    <ProtectedRoute path="/client_info" component={ClientIndexContainer} />
    <ProtectedRoute path="/tax_bracket" component={BracketIndexContainer}/>
    <ProtectedRoute path="/tax_bracket" component={LowerBracketIndexContainer}/>
</div>
);

export default App;
