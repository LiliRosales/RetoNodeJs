const express = require('express');

const app = express();
const route = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexion a la base de datos
