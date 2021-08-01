import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = process.env.REACT_APP_ID
  const APP_KEY = process.env.REACT_APP_KEY

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('tapioca')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`../.netlify/functions/recipesFetch?query=${query}`)
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
