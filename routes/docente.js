//URL's de nuestras RESTapi o las de las operaciones que pueda hacer el servidor
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const db = require('../database');
//Requiero el modelo
const docente = require('../models/docente');

/* router.get('/', (req, res) => {  
    db.docente.findAll()
    .then((datadocente) => {
        console.log("entro 2-------------------;;;;;;");
        res.json(datadocente); 
    })
    .catch(() => res.status(500).json('Error grave'));
}); */
//midleware de express para json y ya no se usa el body-parse
router.use(express.json());

router.get('/', async (req, res) => {
    const datadocente = await db.docente.findAll();
    res.json(datadocente);
});
/* ejemplo de post con json */
/* router.post('/test', (req, res) => {
    console.log("se hizo un post");
    const data = req.body.data;
    res.send('Add ' + data);
}); */

router.post('/', async (req, res) => {
    const docente = await db.docente.create(req.body)
    res.status(201).json(docente);
    console.log(req.body);
});

router.put('/:id', (req, res,next) => {
    const docente = await db.docente.update(req.params)
    res.status(201).json(docente);
    console.log(req.params);
});

// Este ejemplo es del taller para la agetic
/* router.get("/", (req, res) => {
    Promise.resolve()
        .then(() => listarDocente(req.query.limite, req.query.intervalo))
        .then((listadoDeDocentes) => {
            res.json(listadoDeDocentes);
        })
        .catch(() => res.status(500).json('Error grave'));
});

function listarDocente() {
    return models.docente.findAll()
        .then(respuesta => {
            console.log("\n***Listando docentes");
            console.log(JSON.stringify(respuesta));
            return respuesta;
        }).catch(error => {
            // logger
            throw error;
        });
} */
module.exports = router;


