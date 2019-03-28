'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var app = require('./app');
var port = 3700;

mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() => {
        console.log("Conexión a la base de datos establecida con éxito...");

        //Creacion del servicio
        app.listen(port, () => {
            console.log('servidor corriendo correctamente en la url localhost:3700');
        });

    })
    .catch(err => {
        console.log(err);
    });