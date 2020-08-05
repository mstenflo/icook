import React from 'react';
import { Link } from "react-router-dom";

const SearchRecipeItem = ({ data }) => {
  console.log(data)
  const { title, id } = data;
  return (
    <div className="recipe-index-item">
      <Link to={'/recipes'}>
        <img src={'https://spoonacular.com/recipeImages/'+id+'-480x360'} />
      </Link>
      <div className="recipe-info">
        <Link to={'/recipes'} className="recipe-title">
          {title}
        </Link>
      </div>
      <div className="recipe-stats"></div>
    </div>
  );
}

export default SearchRecipeItem;
