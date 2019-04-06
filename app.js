const express = require("express");
const app = express();

app.get("/" , function(req, res){
    res.sendFile( __dirname + "/html/index.html");
});
app.get("/pagina1" , function(req, res){
    res.send("pagina1");
});

app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("olá " + req.params.nome);
})


app.listen(8081); //localhost:8081