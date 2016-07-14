//http
var http = require("http");
//obteniendo informacion del entorno
// de ejecucion con respecto al Ip
//y el puerto que devemos de usar en
//nuestro server
var PORT = process.env.PORT;
var IP = process.env.IP || `127.0.0.1`;
if(IP==`127.0.0.1`){
    console.log("> ---- EJECUTANDO EN MODO LOCAL ----");
}

//crear un servidor basico
var server = http.createServer(function(req,res){
    //Armar la respuesta http
    //Armar un encabezado http
    res.writeHead(200, {
        "Content-Type" : "text/html",
        "Server" : "ITGAM@4.2.4"
    });
    // Enviamos la respuesta
    res.write("<h1>Yolanda Moreno server</h1>");
    //cerrar conexion
    res.end();
});
//poner atrabajar el server
server.listen(PORT,IP,function(){
  console.log(`> Server listening @http://${IP}:${PORT} ...`);

});