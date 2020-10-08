import React, { useEffect } from 'react';
import RecipeIndexItem from './recipe_index_item';

const RecipeIndex = props => {

  useEffect(() => {
    props.requestRecipes();
    props.requestUsers();
  }, []);

  const { recipes, users } = props;

  if (!recipes) return null;

  return (
    <div className="recipe-index">
      {
        recipes.map((recipe, idx) => (
          <RecipeIndexItem recipe={recipe} users={users} key={idx} />
        ))
      }
    </div>
  );
}

export default RecipeIndex;