// Conexion de los socket que se ejecutaran con el servidor 
const socket = io.connect();
        
// Recepcion mensaje
socket.on('nuevo_usuario',function(data){
    alert("Nuevo Usuario: "+ data.usuario);
});

socket.on('send_mensaje_server',function(data){
    $('#cont_mensaje').append('<p><strong>'+data.usuario+': </strong>'+data.mensaje+'</p>');
});


function loguearse(){

    correo="";
    usuario="";
    correo = $('#login_form #correo').val();
    usuario = $('#login_form #usuario').val();

    if (usuario!="" && correo!="") {
         // Emitir mensaje
        socket.emit('datos_usuario',{correo: correo, usuario: usuario})
        $('#texteable_div').show();

    } else {
        alert("Ingrese sus datos para loguearse");
    }
}

function enviarMensaje(){
    mensajeInput = $('#mensaje').val();
    $('#mensaje').val("");
    socket.emit('send_mensaje',{mensaje: mensajeInput , user : usuario});
}