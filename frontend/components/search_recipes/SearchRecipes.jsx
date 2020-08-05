import React, { Component } from 'react';
import axios from 'axios';
import SearchRecipeItem from './SearchRecipeItem';

class SearchRecipes extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      recipe: [],
      searchWord: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchWord: e.target.value
    })
  }

  handleEnter(e) {
    if (e.keyCode === 13) this.handleSearch(this.state.searchWord);
  }

  handleSearch(searchWord) {
    let apiKey = '1a974bca59804d718e18d36625f1dceb';
    if (searchWord) {
      axios.get('https://api.spoonacular.com/recipes/search?query=' + searchWord + '&apiKey=' + apiKey)
        .then(res => {
          this.setState({
            recipe: res.data.results
          });
        })
        .catch(err => console.log(err))
    } else this.setState({
      recipe: []
    })
  }

  render() {
    return (
      <div>
        <div className="search">
          <input
            type='text'
            className="searchTerm"
            placeholder="Search a recipe" 
            onChange={this.handleChange}
            onKeyUp={this.handleEnter}
            autoFocus
          />
          <button
            className="searchButton"
            onClick={() => this.handleSearch(this.state.searchWord)}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="recipe-index">
          {this.state.recipe && this.state.recipe.map(recipe => (
            <SearchRecipeItem data={recipe} key={recipe.id} />
            )
          )}
        </div>
      </div>
    );
  }
}

export default SearchRecipes;
