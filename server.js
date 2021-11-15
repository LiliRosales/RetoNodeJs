const express = require('express');
const mongoose = require('mongoose');

const app = express();
const route = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexion a la base de datos

mongoose.connect("mongodb+srv://leidykga:39715718Ll@clusterc4w.yrdqm.mongodb.net/retoNodeJs?retryWrites=true&w=majority");

//Operaciones CRUD

app.use(route);
app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
});