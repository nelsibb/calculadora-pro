//inicializacion

var express = require('express');
var app = express();//exdpress entra en app
var mongoose=require('mongoose'); //se usa la libreria para poder estar conectado
var port = process.env.PORT || 8080;
app.configure(function(){
    app.use(express.static(__dirname + '/')); //perimite enviar los datos al server
    app.use(express.logger('dev')); //libreria para debuguear
    app.use(express.methodOverride());
});
var bodyParser= require('body-parser'); //permite enviarle datos al cliente
app.use(bodyParser.json({limit: '50mb'})); //le pone el limite que puede mandar el usuario
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); //libreria para encriptar



require('./routes.js')(app); //se le encia el archivo a route  todo express
//puerto por donde saldra el archivo
app.listen(port);
console.log("APP por el puerto "+port);