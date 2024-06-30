import React, { useState, useEffect } from 'react';
import IngredientList from './components/IngredientList';
import SelectedIngredients from './components/SelectedIngredients';
import RecipeList from './components/RecipeList';
import CustomNavbar from './components/Navbar';
import Filters from './components/Filters';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [ingredients, setIngredients] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    useEffect(() => {
        setIngredients(['Tomato', 'Cheese', 'Basil', 'Chicken', 'Beef', 'Onion', 'Garlic', 'Spices']);
    }, []);

    const handleIngredientSelect = (ingredient) => {
        if (!selectedIngredients.includes(ingredient)) {
            setSelectedIngredients(prev => [...prev, ingredient]);
        }
    };

    const handleIngredientRemove = (ingredient) => {
        setSelectedIngredients(prev => prev.filter(item => item !== ingredient));
    };

    const handleSearchRecipes = async () => {
        const response = await fetch('http://localhost:5000/api/recipes/find', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ingredients: selectedIngredients }),
        });
        const data = await response.json();
        setRecipes(data);
    };

    const handleFilterRecipes = async (filters) => {
        const response = await fetch('http://localhost:5000/api/recipes/filter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filters),
        });
        const data = await response.json();
        setRecipes(data);
    };

    const handleAddToFavorites = (recipe) => {
        setFavoriteRecipes(prev => [...prev, recipe]);
    };

    return (
        <div className="App">
            <CustomNavbar />
            <div className="container">
                <h1 className="mt-4">Recipe Finder</h1>
                <Filters onFilter={handleFilterRecipes} />
                <div className="content mt-4">
                    <IngredientList ingredients={ingredients} onSelect={handleIngredientSelect} />
                    <SelectedIngredients 
                        ingredients={selectedIngredients} 
                        onSearch={handleSearchRecipes} 
                        onRemove={handleIngredientRemove} 
                    />
                    <RecipeList recipes={recipes} onAddToFavorites={handleAddToFavorites} />
                </div>
            </div>
        </div>
    );
}

export default App;
