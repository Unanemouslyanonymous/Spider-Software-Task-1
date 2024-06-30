const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');
const db = require('./config/db');
const Recipe = require('./models/recipeModel');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/recipes', recipeRoutes);

// Connect to MongoDB
mongoose.connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        initializeRecipes();
    })
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

async function initializeRecipes() {
    const count = await Recipe.countDocuments();
    if (count === 0) {
        const sampleRecipes = [
            {
                name: 'Margherita Pizza',
                ingredients: ['Tomato', 'Cheese', 'Basil'],
                image: 'https://example.com/margherita.jpg',
                procedure: 'Spread the tomato sauce on the pizza base. Add cheese and basil leaves. Bake in the oven.',
                cuisine: 'Italian',
                preparationTime: 20,
                dietaryRestrictions: ['Vegetarian']
            },
            {
                name: 'Chicken Curry',
                ingredients: ['Chicken', 'Onion', 'Garlic', 'Tomato', 'Spices'],
                image: 'https://example.com/chickencurry.jpg',
                procedure: 'Cook the chicken with onions, garlic, tomatoes, and spices. Serve with rice.',
                cuisine: 'Indian',
                preparationTime: 40,
                dietaryRestrictions: ['Gluten-Free']
            }
            // Add more sample recipes
        ];

        await Recipe.insertMany(sampleRecipes);
        console.log('Sample recipes added to the database');
    }
}
