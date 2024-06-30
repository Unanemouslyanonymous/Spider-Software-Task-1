import React from 'react';
import RecipeCard from './RecipeCard';
import '../styles/RecipeList.css';

const RecipeList = ({ recipes, onAddToFavorites }) => {
    return (
        <div className="recipe-list">
            <h2>Recipes</h2>
            <div className="recipes">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} onAddToFavorites={onAddToFavorites} />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
