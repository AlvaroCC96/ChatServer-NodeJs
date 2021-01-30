// importamos e inicialiamos app a traves de la libreria express 
const express  = require('express');
const app = express();

// Importamos la libreria http del SO 
const http = require('http');

const server = http.createServer(app);

server.listen(3000);

// Sockets
const socketIo = require('socketIo');
const io = socketIo.listen(server);
