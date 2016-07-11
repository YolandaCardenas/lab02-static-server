// leyendo archivo de configuracion
var fs= require("fs");
        var objconfig = JSON.parse
        (fs.readFileSync("./conf/config.json","utf8"));
        objconfig.IP= process.env.IP || objconfig.IP;
        objconfig.PORT = process.env.PORT || objconfig.PORT;
        //exporto objeto de config
        module.exports= objconfig;|
    }
  });
