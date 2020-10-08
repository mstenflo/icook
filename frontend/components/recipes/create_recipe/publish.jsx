import React, { useState } from 'react';

import { updateObject } from '../../../shared/utility';

const Publish = props => {

  const [publishForm, setPublishForm] = useState(
    {
      author_id: props.author_id,
      category: '',
      title: ''
    }
  );

  const handleSubmit = e => {
    e.preventDefault();
    props.createRecipe(publishForm)
      .then(res => props.history.push(`/recipes/${res.recipe.id}/edit`));
  }

  const update = (e, field) => {
    const updatedForm = updateObject(publishForm, { [field]: e.target.value });
    setPublishForm(updatedForm);
  }

  return(
    <div>
      <div className="new-recipe-image">
        <div className="new-recipe-text">
          <h1>SHARE WHAT YOU MAKE WITH iCook</h1>
          <br/>
          <p>
            iCook is a platform for you to share what you like to cook for yourself and for your friends.
            From a one step recipe to a 100 step multi-course meal, everyone has something to share.
            Join our community of cooking enthusiasts.
          </p>
          <br/>
          <br/>
        </div>

        <form onSubmit={handleSubmit}>
          
          <div className="new-recipe-wrapper">
            <label htmlFor="title">
              <input 
                className="stepTitleInput" 
                type="text"
                placeholder="Recipe Title"
                onChange={e => update(e, "title")}
              />
            </label>
            <div className="new-category">
              <p>Category:
                <label htmlFor="category">
                <input 
                  className="category-input" 
                  type="text"
                  placeholder="Appetizer, Dessert, etc."
                  onChange={e => update(e, "category")}
                />
              </label>
              </p>
            </div>
          </div>
            <button className="publishButton" onClick={handleSubmit}>
              Create Recipe
            </button>
        </form>
      </div>
    </div>
  )
}

export default Publish;