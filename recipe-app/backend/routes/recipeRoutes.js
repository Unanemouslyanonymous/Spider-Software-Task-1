const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.getAllRecipes);
router.post('/find', recipeController.findRecipes);
router.post('/filter', recipeController.filterRecipes);

module.exports = router;
