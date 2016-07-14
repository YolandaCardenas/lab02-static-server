//http
var http = require("http"),
fs = require('fs'),
config = require("./config/config.js"),
staticServer = require ('./internals/static-server'),
config = require('color'),
handler = require ('./internals/handlers');

//obteniendo las configuraciones
// del modulo de configuraciones
var PORT = config.PORT;
var IP = config.IP;
if(IP=='127.0.0.1');{
    console.log("-------ejecutando en modo local-----");
}

var server = http.createServer(function (req,res){
//obtener la url del archivo 
var url = req.url;
if(url =="/"){
    //sirve el index.html
    url = "/index.html";
}
     
    //verificando que la particion
    //del cliente sea una ruta
    //virtual
   if(typeof(handlers[url]) ==='funtion'){
    // sie entro aqui,significa que
   //existe un manejador para url
    //que se esta solicitando por lo tanto
    //lo ejecuto
    handlers[url](req,res)


}else{
       console.log('>URL solicitando: ${url} ...'.yellow);
//sirvo la url con i server estatico 
staticServer.server(url, res);
    
}
   
    }
 
});
//poner a trabajar al a servidor 
server.listen(PORT,IP,function () {
    console.log(`> Server listening http://${IP}:${PORT}...`);
});