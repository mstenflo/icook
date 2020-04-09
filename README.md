# iCook

[Live App](https://icookapp.herokuapp.com/#/)

![alt text](https://github.com/mstenflo/icook/blob/master/app/assets/images/README/ScreenShot.png "iCook Logo")

iCook is a recipe database and resource for people who like cooking great meals. It allows members to post their own recipes, view other member recipes and comment on them. No membership is required to view the recipes in the database. The site was built using Rails in the backend and React/Redux in the frontend.

# Features

* User authentication and encrypted login using BCrypt

Frontend error handling to catch any errors before sending info to the database. Catch, display and clear error messages for proper registration and login.

<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/LoginForm.png" width="500">

* Members can browse database of recipes and steps associated with the recipe
* Media stored and retrieved through AWS S3 services
* Using Rails backend
* React for the frontend using Redux to manage the store and local state
* Members can post new recipes

Creating a new recipe sends an ajax promise to the backend and redirects to the recipe edit page

```
export const createRecipe = recipe => (
  $.ajax({
    method: "POST",
    url: "/api/recipes",
    data: {
      recipe
    }
  })
```

<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/PublishRecipe.png" width="500">

* Members can edit recipes they posted

Allow users to add recipes which dynamically get added and displayed on the edit page. Only updates the local state render the new ingredients on the DOM and does not get added to the database until the user submits the changes, allowing the user to cancel the changes. The new ingredient is added to a new variable with the existing ingredients using the spread operator. The new ingredient that has been added then gets cleared to an empty string.

```
handleIngredient(e) {
    e.preventDefault();

    const updatedIngredients = [...this.state.ingredients, this.state.ingredient]
    this.setState({
      ingredients: updatedIngredients,
      ingredient: ''
    })
  }
  ```

<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/EditRecipe.png" width="500">
<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/EditTitleAndIngredients.png" width="500">

* Members can attach a photo to their recipe

Only ask to upload an image if no image has been added yet.

```
  {
      !this.state.photourl &&
      <label className="upload-image" htmlFor="newImage">upload an image:</label>
  }
```

If there is an image, display the thumbnail.

```
  {
      this.state.photourl && 
        <div className="thumbnail">
          <img src={this.state.photourl} />
        </div>
    }
```

<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/AddPhoto.png" width="500">

* Members can post comments on recipes

Used the json package "moment" to handle time in javascript. Has the ```.fromNow()``` command that displays how long ago the post was created, using the ```created_at``` timestamp from the comment model.

```
{
  moment(comment.created_at).startOf('minute').fromNow()
}
```

<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/CommentForm.png" width="500">

# Upcoming Features

* Database is searchable
* Recipes are displayed by categories
* Members have their own show pages with personal info and a list of recipes they posted
