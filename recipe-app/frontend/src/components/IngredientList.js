import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../styles/IngredientList.css';

const IngredientList = ({ ingredients, onSelect }) => {
    return (
        <div className="ingredient-list">
            <h2>Select Ingredients</h2>
            <ListGroup>
                {ingredients.map((ingredient, index) => (
                    <ListGroup.Item 
                        key={index} 
                        onClick={() => onSelect(ingredient)}
                        action
                    >
                        {ingredient}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default IngredientList;
    