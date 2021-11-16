const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const PersonaSchema = require("./Modelos/Persona.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexion a la base de datos

mongoose.connect("mongodb+srv://leidykga:39715718Ll@clusterc4w.yrdqm.mongodb.net/retoNodeJs?retryWrites=true&w=majority");

//Operaciones CRUD
router.get('/',(req, res) => {
    res.send("Este es el inicio de mi primera API");
});

// Consultar todos
router.get('/Persona',(req, res)=>{
    PersonaSchema.find(function(err,datos){
        if(err){
            consolo.log("Error leyendo las personas");
        }else{
            res.send(datos);
        }
    })   
})
// Insertar

router.post('/Persona', (req, res)=>{
    let nuevoPersona = new PersonaSchema({
        idPersona: req.body.id,
        tipoDocumentoPersona: req.body.tipodocumento,
        documentoPersona: req.body.documento,
        nombresPersona: req.body.nombres,
        apellidosPersona: req.body.apellidos,
        direccionPersona: req.body.direccion,
        emailPersona: req.body.email,
        telefonoPersona: req.body.telefono,
        celularPersona: req.body.celular,
        sitioWebPersona: req.body.sitioweb,
        descripcionPerfilPersona: req.body.descripcionperfil
    });
    nuevoPersona.save(function(err,datos){
        if(err){
            console.log(err);
        }
        res.send("Persona almacenada")
    })
})

//Eliminar persona
router.delete('/Persona/:id', async(req,res) =>{
    try{
        console.log(req.body.id)
        const DeletePersona = await PersonaSchema.findByIdAndDelete(req.body.id);
        res.send(DeletePersona);
    }catch(e){
        res.status(500).send("No se pudo eliminar la persona");
    }
})

// Actualizar persona 
router.patch('/Persona/:id', async(req,res)=>{
    try{
        const _id = req.body.id
        const UpdateRequest = await PersonaSchema.findByIdAndUpdate(_id, req.body)
        res.send(UpdateRequest);
        }
        catch(e){
            res.status(404).send("No se pudo actualizar la persona")
        }
})


app.use(router);
app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
});