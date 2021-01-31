// importamos e inicialiamos app a traves de la libreria express 
const express  = require('express');
const app = express();
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);

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

    // On y emit (Recibir y enviar)
    socket.on('datos_usuario', function(data){
        console.log("Correo: "+data.correo + " - Usuario: "+data.usuario);

        //emit 
        io.emit('nuevo_usuario',{usuario: data.usuario});
    });

    // Recepcion de mensaje
    socket.on('send_mensaje', function(data){
        mensajeRecibido = data.mensaje;
        usuarioRecibido = data.user;

        // Envio del mensaje desde del servidor
        io.emit('send_mensaje_server',{usuario:usuarioRecibido , mensaje:mensajeRecibido})
    })
    
});
