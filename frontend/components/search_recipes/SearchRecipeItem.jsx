import React from 'react';
import { Link } from "react-router-dom";
import Loader from 'react-loader'

const SearchRecipeItem = ({ data }) => {
  const { title, id } = data;
  const options = {
    lines: 8,
    length: 3,
    width: 2,
    radius: 5,
    scale: 1.00,
    corners: 1,
    color: '#000',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: -1,
    top: '155px',
    left: '150px',
    shadow: false,
    hwaccel: false,
    position: 'relative'
  };

  return (
    <div className="recipe-index-item">
      <Link to={'/search/' + id}>
        <Loader loaded={false} options={options} />
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
