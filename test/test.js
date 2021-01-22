const { validRequestsRecipeControllerTest } = require('./controllers/validRequestsRecipeControllerTest.js');
const { invalidRequestsRecipeControllerTest } = require('./controllers/invalidRequestsRecipeControllerTest.js');
const { getRecipeGiphyURLTest } = require('./services/giphyServiceTest.js');

validRequestsRecipeControllerTest();
invalidRequestsRecipeControllerTest();
getRecipeGiphyURLTest();
