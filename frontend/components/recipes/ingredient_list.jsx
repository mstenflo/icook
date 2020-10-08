import React from 'react';

const IngredientList = props => {
  return (
    <li className="ingredients">
      {props.ingredient}
    </li>
  );
}

export default IngredientList;
