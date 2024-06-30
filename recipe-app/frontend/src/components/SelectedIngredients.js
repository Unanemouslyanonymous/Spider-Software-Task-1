import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import '../styles/SelectedIngredients.css';

const SelectedIngredients = ({ ingredients, onSearch, onRemove }) => {
    return (
        <div className="selected-ingredients">
            <h2>Selected Ingredients</h2>
            <ListGroup>
                {ingredients.map((ingredient, index) => (
                    <ListGroup.Item key={index}>
                        {ingredient}
                        <Button 
                            variant="danger" 
                            size="sm" 
                            onClick={() => onRemove(ingredient)} 
                            className="float-right"
                        >
                            Remove
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Button variant="primary" className="mt-3" onClick={onSearch}>Find Recipes</Button>
        </div>
    );
};

export default SelectedIngredients;
