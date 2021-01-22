const { createServer } = require('http');

const index = require('./app.js');

require('dotenv').config();

const PORT = process.env.PORT || 4567;

const server = createServer(index);
server.listen(PORT);

server.on('listening', () => console.log(`Server is now running. \n Port: ${PORT} \n Environment: http://localhost:${PORT}`));

server.on('error', (error) => console.log(`${error}`));
