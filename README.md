# YUMMY
**API able to search for a recipe when given up to three different ingredients, with a gif attached to the response.**

**Author**: Vítor F. Bem Silva

## Introduction

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
//TODO
```
## Testing
The tests for the project will automatically run whenever a docker image is built, but you can also run it locally by using the command defined in the package.json file:
```
npm test
```
## Considerations

## Documentation

## References