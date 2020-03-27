import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import Navbar from "./navbar/navbar";
import NavBottom from "./nav_bottom/nav_bottom";
import Footer from './footer/footer'
import CreateRecipeContainer from './recipes/create_recipe/create_recipe_container';
import SplashContent from "./splash-content/splash-content";
import RecipeShowContainer from './recipes/recipe_show_container';
import RecipeIndexContainer from './recipes/recipe_index_container';
import NotFound from './not_found/not_found';
import PublishContainer from "./recipes/create_recipe/publish_container";
import EditRecipeContainer from './recipes/edit_recipe/edit_recipe_container';
import StepEditContainer from './steps/step_edit_container';
import EditRecipeTitleContainer from './recipes/edit_recipe/edit_recipe_title_container';

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
      <ProtectedRoute exact path="/steps/:stepId/edit" component={StepEditContainer} />
      <ProtectedRoute exact path="/recipes/:recipeId/edit" component={EditRecipeContainer} />
      <ProtectedRoute exact path="/recipe_title/:recipeId/edit" component={EditRecipeTitleContainer} />
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