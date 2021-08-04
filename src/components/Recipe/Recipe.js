import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.recipeTitle}>{title}</h1>
            <ul>
                {ingredients.map((ingredient,index) => (
                    <li key={index} className={style.recipeIngredient}>{ingredient.text}</li>
                ))}
            </ul>
                <p className={style.recipeCalories}>Calories: {calories.toFixed(0)}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe