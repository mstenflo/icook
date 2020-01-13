import React from "react";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Navbar from "./navbar/navbar";
import NavBottom from "./nav_bottom/nav_bottom";
import Footer from './footer/footer'
import CreateRecipe from "./create_recipe/create_recipe";
import SplashContent from "./splash-content/splash-content";
import RecipeIndex from './recipes/recipe_index';


const App = () => (
  <div>
    <header>
      <Navbar />
      <NavBottom />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    <Route exact path="/" component={SplashContent} />
    <Route exact path="/create" component={CreateRecipe} />
    <Route exact path="/recipes" component={RecipeIndex} />
    <footer className="footer">
      <Footer />
    </footer>
  </div>
);

export default App;