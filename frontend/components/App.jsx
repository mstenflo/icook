import React from "react";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Navbar from "./navbar/navbar";
import NavBottom from "./nav_bottom/nav_bottom";
import SplashImage from './splash_image/splash_image';
import SplashInfo from "./splash_info/splash_info";
import Footer from './footer/footer'
import CreateRecipe from "./create_recipe/create_recipe";


const App = () => (
  // <div>
    // <body>
    <div>
      <header>
        <Navbar />
        <NavBottom />
      </header>
      {/* <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} /> */}
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        {/* <AuthRoute exact path="/create" component={CreateRecipe} /> */}
      </Switch>
      <div className="home-content-adspot">
        <div className="adspot-text">
          <SplashImage />
        </div>
        <br/>
        <SplashInfo />
        <hr/>
        <Footer />
      </div>
    </div>
    // </body>
  // </div>
);

export default App;