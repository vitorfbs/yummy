const index = require('./app.js');

require('dotenv').config();

const { createServer } = require('http');

const PORT = process.env.PORT || 6789;

const server = createServer(index);
server.listen(PORT);

server.on('listening', () => console.log(`Server is now running. \n Port: ${PORT} \n Environment: http://localhost:${PORT}`));

server.on('error', (error) => console.log(`${error}`));