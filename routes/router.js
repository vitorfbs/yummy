const express = require('express');

const yup = require('yup');

const recipeController = require('../controllers/recipeController');
const validate = require('../validate/validate.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Yummy API');
});

router.get('/recipes/',
  validate({
    shape: {
      i: yup.string().required(),
    },
  }), recipeController.getRecipes);

module.exports = router;
