import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import SearchRecipeItem from './SearchRecipeItem';

class SearchRecipes extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      recipes: [],
      items: [],
      hasMore: false,
      searchWord: '',
      length: 0,
      apiKey: '1a974bca59804d718e18d36625f1dceb'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.fetchMoreData = this.fetchMoreData.bind(this);
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
    let number = 99;
    this.setState({ hasMore: true });
    if (searchWord) {
      axios.get('https://api.spoonacular.com/recipes/complexSearch?query=' + searchWord + '&apiKey=' + this.state.apiKey + '&number=' + number)
      .then(res => {
        this.setState({
          recipes: res.data.results,
          length: res.data.results.length
        });
      })
      .catch(err => console.log(err))
    } else this.setState({
      recipes: []
    });
    this.fetchMoreData();
    // this.setState({
    //   items: this.state.items.concat(this.state.recipes.splice(0, 6))
    // });
  }

  handleRandom() {
    axios.get('https://api.spoonacular.com/recipes/random?number=1' + '&apiKey=' + this.state.apiKey)
      .then(res => {
        this.props.history.push('/search/' + res.data.recipes[0].id)
    })
  }

  fetchMoreData() {
    if (this.state.items.length >= this.state.length) {
      this.setState({ hasMore: false });
    }
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(this.state.recipes.splice(0, 6))
      });
    }, 1500)
  };

  showLoader() {
    return this.state.hasMore ? <h4 style={{ textAlign: "center" }}>Loading...</h4> : null;
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
        <div id="scrollableDiv" className="recipe-index">
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
            // scrollableTarget="scrollableDiv"
          >
            {this.state.items && this.state.items.map(recipe => (
              <SearchRecipeItem data={recipe} key={recipe.id} />
              )
            )}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default SearchRecipes;
