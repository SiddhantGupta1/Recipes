import React from 'react';
import style from './recipe.module.css';

const Recipe = ({keyid, title, calories, image, ingredient}) => {

    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredient.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ol>
            <p>Calorie Intake: {calories} cal</p>
            <img className={style.image} src={image} />
        </div>
    )
}

export default Recipe;

