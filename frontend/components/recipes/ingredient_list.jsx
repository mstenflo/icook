import React from 'react';

class IngredientList extends React.Component {
  render() {
    return (
      <li className="ingredients">
        {this.props.ingredient}
      </li>
    );
  }
}

export default IngredientList;
