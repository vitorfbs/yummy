const { validRequestsRecipeControllerTest } = require('./controllers/validRequestsRecipeControllerTest.js');
const { invalidRequestsRecipeControllerTest } = require('./controllers/invalidRequestsRecipeControllerTest.js');
const { getRecipeGiphyURLTest } = require('./services/giphyServiceTest.js');
const { getRecipePuppyRecipesTest } = require('./services/recipePuppyServiceTest.js');
const { indexTest } = require('./indexTest.js');
const { invalidRouteTest } = require('./invalidRouteTest.js');

validRequestsRecipeControllerTest();
invalidRequestsRecipeControllerTest();

getRecipeGiphyURLTest();
getRecipePuppyRecipesTest();

indexTest();

invalidRouteTest();
