const express = require('express');
const recipeController = require('../controllers/recipeController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Yummy API');
});

router.get('/recipes/', recipeController.getRecipes);

module.exports = router;
