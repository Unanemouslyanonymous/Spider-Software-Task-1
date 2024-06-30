const Recipe = require('../models/recipeModel');

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Find recipes based on ingredients
exports.findRecipes = async (req, res) => {
    const { ingredients } = req.body;
    try {
        const recipes = await Recipe.find({
            ingredients: { $all: ingredients }
        });
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Filter recipes
exports.filterRecipes = async (req, res) => {
    const { cuisine, preparationTime, dietaryRestrictions } = req.body;
    let filter = {};

    if (cuisine) {
        filter.cuisine = cuisine;
    }

    if (preparationTime) {
        filter.preparationTime = { $lte: preparationTime };
    }

    if (dietaryRestrictions) {
        filter.dietaryRestrictions = { $in: dietaryRestrictions.split(',').map(str => str.trim()) };
    }

    try {
        const recipes = await Recipe.find(filter);
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
