import React from "react";
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = () => (
  // <div>
    <body>
    <header>
      <div className="site-header-top">
        {/* <Link to="/"> */}
        {/* </Link> */}
      <GreetingContainer />
      </div>
      <img src="home-button.jpg" alt="home"/>
      <div className="site-header-bottom">

      </div>
    </header>
    {/* <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} /> */}
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    <div className="home-content-adspot">
    </div>

    </body>
  // </div>
);

export default App;