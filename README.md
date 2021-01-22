# YUMMY
**API able to search for a recipe when given up to three different ingredients, with a gif attached to the response.**

**Author**: Vítor F. Bem Silva

## Introduction
This project was developed in JavaScript, using NodeJS and ExpressJS. I started with a simple setup of tests following Test Driven Developmenmt (TDD) methodology, so I would have some expected behaviour of the API based on the prerequisites for this project.

The general idea as far as behaviour goes for this project is, "if it's not what you expected, it's an error". I decided to treat every scenario where the response would not be the correct response as a better warned than given as is to the user. This will become clear in the workflow of the recipes route.

## Requirements

### Local
- NodeJS
- npm
### Docker
- Docker client
### Heroku
- Browser (Chrome, Firefox or Edge) or a software for HTTP requests (Insomina, for example)

## Usage

### Setting up the environment variables
For either building the Docker image or running locally, you will need to setup a .env file in your project root. Below are the variables needed in the file:
```
PORT= //Port to run the project

GIPHY_API_KEY= //Developer API key for the Giphy public API
GIPHY_HOST= //base host url for the Giphy public API
GIPHY_CONTENT_RATING= //either restricts or allows for adult content. g for moderated content or r for mature content.

RECIPE_PUPPY_HOST= //base host url for the Recipe Puppy public API.
```

### Running locally
For running locally after setting up the .env file, you can run:
```
npm install
```
```
npm run dev
```

### Bulding and running the Docker image
```
//building the image
docker build -f Dockerfile . -t yummy

//running the image
docker run -p 4567:4567 yummy

//running the image detached
docker run -dt -p 4567:4567 yummy
```

### Running the Docker image from the registry
```
//pulling the image from the registry
docker pull bemsilva/yummy:latest

//running the image
docker run -p 4567:4567 bemsilva/yummy:latest
```

### Running on Heroku
Access the following link on your browser:
```
https://vfbs-yummy.herokuapp.com/
```
The endpoints should be available in the instance of the app normally. It's important to note that since this app is running on a free repository on Heroku, it can be put to sleep given enough time.

## Endpoints
There are two available endpoints in the Yummi API: the index and recipes endpoints.

### Index
This is a basic index for the API.
```
//Using localhost as the HOST and 4567 as PORT in the .env file
http://localhost:4567/
```

### Recipes
```
//Using localhost as the HOST and 4567 as PORT in the .env file
//This will throw an error for the missing query "i"
http://localhost:4567/recipes/

//This will return recipes related to the ingredient cheese
http://localhost:4567/recipes/?i=cheese
```

## Testing
The tests for the project will automatically run whenever a docker image is built, but you can also run it locally by using the command defined in the package.json file:
```
npm test
```

## Considerations
- There was a weird behaviour from the Recipe Puppy API where, if you give a compound ingredient (black pepper, for example), the API will fail. However, this weird behaviour is prevented by adding a compound ingredient as the second element or adding another ingredient as a second parameter.

- I chose to return a 404 when the list of recipes returns empty, preferring to consider the empty list as a NOT FOUND instead of a OK. This is debatable inside the RESTful architecture, but I preferred a more descriptive route to the user.

- The only consistent way I found for validating the "i" variable in the query was using yup. I would love to get some feedback on this if possible if there is a better way.

- This project started with the ES6 style of imports but after a lot of troubleshooting with the chai repository documentation, there is apparently a very constant reality relating to chai where some versions of NodeJS simply break the possibility of using import instead of require. There was a plethera of issues regarding this with many versions of NodeJS. Once again, would love to get some feedback on this and I will spend some time trying to troubleshoot the issue, even if the period of test is already over.

- I decided to run the tests as a prerequisite for mounting the Docker image. I would prefer to leave this to a CI pipeline rather than the Dockerfile of an image, but since it was the only resource on hand on the development of this project, I decided it would be a cool thing to do to guarantee the quality of the image built.

- There was a very weird phenomenon regarding the linter where if I would not add the extension of the files (.js at the end), it would point an error. If I added, it created another error. I decided to keep the extension since I didn't have time to find a conclusive piece of text on the issue as of writing this.

- I also decided to add a default status to the success and failure handlers, as it would guarantee the functioning of the API in an edge case scenario. Would love some feedback on this.

- There was one check on the tests I left out for lack of time: schemas. They would probably the first thing I would add to the tests to improve them.

## Documentation
[NodeJS](https://github.com/nodejs/node) <br/>
[ExpressJS](https://github.com/expressjs/express) <br/>
[nodemon](https://github.com/remy/nodemon) <br/>
[dotenv](https://www.npmjs.com/package/dotenv) <br/>
[MochaJS](https://mochajs.org/) <br />
[ChaiJS](https://www.chaijs.com/) <br />
[yup](https://github.com/jquense/yup) <br />
[ESLint](https://eslint.org/) <br />

## References
These are some links I used as research, complimentary to the documentation previously stated.

https://dev.to/joaohencke/validating-schema-with-yup-2iii
https://developers.giphy.com/docs/sdk
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71