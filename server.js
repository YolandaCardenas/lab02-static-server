var http = require("http");
var sever = http.createServer(function(req, res){
    res.writeHead(200,{
        "Content-Type" : "text/plain",
        "Server" : "ITGAM@4.2.4"
    });
    res.write("HOLA MUNDO");
    res.end();
})
server.listen(300,`127.0.01`, function(){
    console.log("> Server listening @http://localhost:300...");
});