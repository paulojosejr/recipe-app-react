import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './components/Home/Home'
import RecipeList from './components/RecipeList/RecipeList'
import About from './components/About/About'

const Routes = () => {
    return (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/recipeList' component={RecipeList} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/' />
    </Switch>
    )
}
export default Routes