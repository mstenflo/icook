import React from "react";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from "./navbar/navbar";
import NavBottom from "./nav_bottom/nav_bottom";
import Footer from './footer/footer'
import CreateRecipeContainer from './recipes/create_recipe/create_recipe_container';
import SplashContent from "./splash-content/splash-content";
import RecipeShowContainer from './recipes/recipe_show_container';
import RecipeIndexContainer from './recipes/recipe_index_container';
import NotFound from './not_found/not_found';
import Publish from "./recipes/create_recipe/publish";
import PublishContainer from "./recipes/create_recipe/publish_container";

const App = () => (
  <div>
    <header>
      <Navbar />
      <NavBottom />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={SplashContent} />
      <ProtectedRoute exact path="/create" component={CreateRecipeContainer} />
      <ProtectedRoute exact path="/publish" component={PublishContainer} />
      <Route exact path="/recipes" component={RecipeIndexContainer} />
      <Route path="/recipes/:recipeId" component={RecipeShowContainer} />
      <Route component={NotFound}/>
    </Switch>
    <footer className="footer">
      <Footer />
    </footer>
  </div>
);

export default App;