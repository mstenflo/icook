import React, { useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import SearchRecipeItem from './SearchRecipeItem';

const SearchRecipes = props => {

  const [recipes, setRecipes] = useState([]);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [length, setLength] = useState(0);
  const apiKey = '1a974bca59804d718e18d36625f1dceb';

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  }

  const handleEnter = (e) => {
    if (e.keyCode === 13) handleSearch(searchWord);
  }

  const handleSearch = (searchWord) => {
    let number = 99;
    setRecipes([])
    setItems([]);
    setHasMore(true);

    if (searchWord) {
      axios.get('https://api.spoonacular.com/recipes/complexSearch?query=' + searchWord + '&apiKey=' + apiKey + '&number=' + number)
        .then(res => {
          setRecipes(res.data.results);
          setLength(res.data.results.length);
        })
        .catch(err => console.log(err));
    } else setRecipes([]);
    fetchMoreData();
  }

  const handleRandom = () => {
    axios.get('https://api.spoonacular.com/recipes/random?number=1' + '&apiKey=' + apiKey)
      .then(res => {
        props.history.push('/search/' + res.data.recipes[0].id)
    })
  }

  const fetchMoreData = () => {
    if (items.length >= length) setHasMore(false);

    setTimeout(() => {
      let remainingRecipes = recipes;
      setItems(items.concat(remainingRecipes.splice(0, 6)));
      setRecipes(remainingRecipes);
    }, 1500);
  }

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
          onChange={handleChange}
          onKeyUp={handleEnter}
          autoFocus
        />
        
        <button
          className="searchButton"
          onClick={() => handleSearch(searchWord)}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <br />

      <button
        className="search-random"
        onClick={handleRandom}>Random Recipe
      </button>

      <div id="scrollableDiv" className="recipe-index">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        >
          {items && items.map(recipe => (
            <SearchRecipeItem data={recipe} key={recipe.id} />
            )
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default SearchRecipes;
