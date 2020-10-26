import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
const APP_ID = "77fae62d";
const APP_KEY = 'cdaf018057ae9bbc3612d9116d72db62';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken');

useEffect(() => {
  getRecipes();
},[query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
};

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch("");
};

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
          keyid={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories.toFixed(2)}
          image={recipe.recipe.image}
          ingredient={recipe.recipe.ingredientLines}
         />
      ))}
      </div>
    </div>
  );
};

export default App;
