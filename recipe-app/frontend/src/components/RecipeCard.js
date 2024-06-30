import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/RecipeCard.css';

const RecipeCard = ({ recipe, onAddToFavorites }) => {
    return (
        <Card className="recipe-card">
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>
                    <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
                </Card.Text>
                <Card.Text>
                    <strong>Procedure:</strong> {recipe.procedure}
                </Card.Text>
                <Card.Text>
                    <strong>Cuisine:</strong> {recipe.cuisine}
                </Card.Text>
                <Card.Text>
                    <strong>Preparation Time:</strong> {recipe.preparationTime} minutes
                </Card.Text>
                <Card.Text>
                    <strong>Dietary Restrictions:</strong> {recipe.dietaryRestrictions.join(', ')}
                </Card.Text>
                <Button variant="success" onClick={() => onAddToFavorites(recipe)}>Add to Favorites</Button>
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;
