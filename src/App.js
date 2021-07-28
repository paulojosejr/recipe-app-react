import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = 'c878ee2a'
  const APP_KEY = 'f074d37b821098fe4dedf958b02aa54c'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('tapioca')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

    const data = await response.json()
    setRecipes(data.hits)

  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input placeholder="Search your recipe" className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
        <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.calories}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}/>
        ))}
        </div>
      </div>
  ) 
}

export default App;
