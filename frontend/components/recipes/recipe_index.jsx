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
    if (!recipes) return null;
    // recipes.reverse();
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
};

export default RecipeIndex;