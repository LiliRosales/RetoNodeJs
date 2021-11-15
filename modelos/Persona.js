const mongoose = require('mongoose');

let PersonaSchema = new mongoose.Schema({
    idPersona: Number,
    tipoDocumentoPersona: String,
    documentoPersona: Number,
    nombresPersona: String,
    apellidosPersona: String,
    direccionPersona: String,
    emailPersona: String,
    telefonoPersona: Number,
    celularPersona: Number,
    sitioWebPersona: String,
    descripcionPerfilPersona: String
});

module.exports = mongoose.model('persona',PersonaSchema,'Personas');