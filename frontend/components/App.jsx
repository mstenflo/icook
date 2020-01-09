import React from "react";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Navbar from "./navbar/navbar";
import NavBottom from "./nav_bottom/nav_bottom";


const App = () => (
  // <div>
    // <body>
    <div>
      <header>
        <Navbar />
        <NavBottom />
        {/* <div className="site-header-bottom">

        </div> */}
      </header>
      {/* <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} /> */}
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
      <div className="home-content-adspot">
      </div>
    </div>
    // </body>
  // </div>
);

export default App;