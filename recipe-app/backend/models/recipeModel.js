const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    image: { type: String, required: true },
    procedure: { type: String, required: true },
    cuisine: { type: String, required: true },
    preparationTime: { type: Number, required: true },
    dietaryRestrictions: { type: [String], required: true }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
