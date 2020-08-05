import React from "react";

class Publish extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        author_id: this.props.author_id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    this.props.createRecipe(this.state)
      .then(res => this.props.history.push(`/recipes/${res.recipe.id}/edit`));
  }

  render() {
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

          <form onSubmit={this.handleSubmit}>
            
            <div className="new-recipe-wrapper">
              {/* <div className="new-title"> */}
                <label htmlFor="title">
                  <input 
                    className="stepTitleInput" 
                    type="text"
                    placeholder="Recipe Title"
                    onChange={this.update("title")}
                  />
                </label>
              {/* </div> */}
              <div className="new-category">
                <p>Category:
                 <label htmlFor="category">
                  <input 
                    className="category-input" 
                    type="text"
                    placeholder="Appetizer, Dessert, etc."
                    onChange={this.update("category")}
                  />
                </label>
                </p>
              </div>
            </div>
              <button className="publishButton" onClick={this.handleSubmit}>
                Create Recipe
              </button>
          </form>
        </div>
      </div>
    )
  }
};

export default Publish;