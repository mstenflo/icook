import React from 'react';
import RecipeIndexItem from './recipe_index_item';

class RecipeIndex extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.requestRecipes();
    this.props.requestUsers();
  }
  
  render () {
    const { recipes, users } = this.props;
    return (
      <div className="recipe-index">
        {
          recipes.map(recipe => (
            <RecipeIndexItem recipe={recipe} users={users} key={recipe.id} />
          ))
        }
      </div>
    );
  }
};

export default RecipeIndex;