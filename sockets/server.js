// importamos e inicialiamos app a traves de la libreria express 
const express  = require('express');
const app = express();
app.use(express.static('public'));

// Importamos la libreria http del SO 
const http = require('http');

const server = http.createServer(app);

server.listen(3000);

// Sockets
const socketIo = require('socket.io');
const io = socketIo(server);

// Escuchamos la conexion
io.on('connect' , function(socket){
    console.log("Conexion entrante ID: "+socket.id);
});
