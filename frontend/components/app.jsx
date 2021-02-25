import React from "react";
import NavbarContainer from "./navbar/navbar_container";
import LoginFormContainer from "./session_form/login_form_container";

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <LoginFormContainer />
    {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
</div>
);

export default App;
