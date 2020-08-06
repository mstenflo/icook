import React from 'react';
import { Link } from "react-router-dom";

const SearchRecipeItem = ({ data }) => {
  const { title, id } = data;
  return (
    <div className="recipe-index-item">
      <Link to={'/search/' + id}>
        <img src={'https://spoonacular.com/recipeImages/' + id + '-480x360'} />
      </Link>
      <div className="recipe-info">
        <Link to={'/search/' + id} className="recipe-title">
          {title}
        </Link>
      </div>
      <div className="recipe-stats"></div>
    </div>
  );
}

export default SearchRecipeItem;
