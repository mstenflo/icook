import React, { Component } from 'react';
import axios from 'axios';
import SearchRecipeItem from './SearchRecipeItem';

class SearchRecipes extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      recipe: [],
      searchWord: '',
      apiKey: '1a974bca59804d718e18d36625f1dceb'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
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
    let number = 25;
    if (searchWord) {
      axios.get('https://api.spoonacular.com/recipes/complexSearch?query=' + searchWord + '&apiKey=' + this.state.apiKey + '&number=' + number)
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

  handleRandom() {
    axios.get('https://api.spoonacular.com/recipes/random?number=1' + '&apiKey=' + this.state.apiKey)
      .then(res => {
        console.log(res.data.recipes[0].id);
        this.props.history.push('/search/' + res.data.recipes[0].id)
    })
  }

  render() {
    return (
      <div>
        <p className="search-info">
          Search a database with over 350'000 recipes  
        </p>
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
        <br />
        <button
          className="search-random"
          onClick={this.handleRandom}>Random Recipe
        </button>
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
