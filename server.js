//http
var http= require("http");
var fs= require('fs');
var config= require("./conf/config.json")();
//obteniendo las config
//del modulo de conf
var PORT = config.PORT;
var IP = config.IP;
if(IP==`127.0.0.1`){
    Console.log("> --- EJECUTANDO EN MODO LOCAL ---");
}
//crear un servidor basico 
var server= http.createServer(function(req, res){
    //armar la respuesta en http
    //armar un encabezado http
    res.writeHead(200,{
        "Content-Type": "text/plain",
        "Server": "ITGAM@4.2.4"
    });
    //lectura del archivo a servir
    fs.readFile(`./static/index.html/`,`utf8`,
    function(err,content){
        if(err){
            res.write("<h1>ERROR DE LECTURA </h1>");
        }else{
            res.end(content);
        }
    })
});
//poner a trabajar al server
server.listen(PORT,IP,function(){
    console.log(`> Server listening @http://${IP}:${PORT}...`)
});