const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Iniciamos el servidor
const app = express();

// convertimos el curepo del mensaje
app.use(bodyParser.json());

// Iniciamos los modelos de sequelize
const db = require('./db');

// Sincronizamos la base de datos
db.sequelize.sync().done(() => {
    console.log("\n***Base de datos generada");
    app.listen(3007, () => {
        console.log('La aplicación esta escuchando en el puerto 3007!!!');
    });
});

// Habilitamos los logs
app.use(morgan("dev"));

app.use((req, res, next) => {
    console.log("***Procesando petición...\n");
    next();
});

app.get("/", (req, res) => {
    res.end("***Aplicación NODEJS iniciada en EXPRESSJS\n");
});

/* LISTADO DE DOCENTE
     http://localhost:3007/docente

*/
app.get("/docente", (req, res) => {
    Promise.resolve()
        .then(() => listarDocente(req.query.limite, req.query.intervalo))
        .then((listadoDeDocentes) => {
            res.json(listadoDeDocentes);
        })
        .catch(() => res.status(500).json('Error grave'));
});
function listarDocente() {
    return db.docente.findAll()
        .then(respuesta => {
            console.log("\n***Listando docentes");
            console.log(JSON.stringify(respuesta));
            return respuesta;
        }).catch(error => {
            // logger
            throw error;
        });
}

/* REGISTRO DE DOCENTE
     http://localhost:3007/docente
     '{
      "nombres_D": "JULIO",
      "apellidos_D": "PABOM",
      "especialidad_D": "CALCULO I"
    }'
*/
app.post("/docente", (req, res) => {
    Promise.resolve()
        .then(() => crearDocente(req.body))
        .then((docente) => {
            res.status(201).json(docente);
        })
        .catch(() => res.status(500).json('Error grave'));
});

function crearDocente(docente) {
    return db.docente.create(docente)
        .then(respuesta => {
            console.log("\n***creando docente");
            console.log(JSON.stringify(respuesta));
            return respuesta;
        }).catch(error => console.log(error));
}

/* LISTADO DE AULA
     http://localhost:3007/aula

*/
app.get("/aula", (req, res) => {
    Promise.resolve()
        .then(() => listarAula(req.query.limite, req.query.intervalo))
        .then((listadoDeAulas) => {
            res.json(listadoDeAulas);
        })
        .catch(() => res.status(500).json('Error grave'));
});
function listarAula() {
    return db.aula.findAll()
        .then(respuesta => {
            console.log("\n***Listando aulas");
            console.log(JSON.stringify(respuesta));
            return respuesta;
        }).catch(error => {
            // logger
            throw error;
        });
}

/* REGISTRO DE AULA
    http://localhost:3007/aula
    '{
      "nombre_A": "P1A-2",
      "ubicacion_A": "PISO UNO EDIFICIO CONDOR",
      "capacidad_A": "30 ALUNNOS"
    }'
*/
app.post("/aula", (req, res) => {
    Promise.resolve()
        .then(() => crearAula(req.body))
        .then((aula) => {
            res.status(201).json(aula);
        })
        .catch(() => res.status(500).json('Error grave'));
});

function crearAula(aula) {
    return db.aula.create(aula)
        .then(respuesta => {
            console.log("\n***creando aula");
            console.log(JSON.stringify(respuesta));
            return respuesta;
        }).catch(error => console.log(error));
}






/* LISTADO DE MATERIA
     http://localhost:3007/aula

*/
app.get("/aula", (req, res) => {
    Promise.resolve()
        .then(() => listarAula(req.query.limite, req.query.intervalo))
        .then((listadoDeAulas) => {
            res.json(listadoDeAulas);
        })
        .catch(() => res.status(500).json('Error grave'));
});
function listarAula() {
    return db.aula.findAll()
        .then(respuesta => {
            console.log("\n***Listando aulas");
            console.log(JSON.stringify(respuesta));
            return respuesta;
        }).catch(error => {
            // logger
            throw error;
        });
}

/* REGISTRO DE MATERIA
    http://localhost:3007/aula
    '{
      "nombre_A": "P1A-2",
      "ubicacion_A": "PISO UNO EDIFICIO CONDOR",
      "capacidad_A": "30 ALUNNOS"
    }'
*/
app.post("/aula", (req, res) => {
    Promise.resolve()
        .then(() => crearAula(req.body))
        .then((aula) => {
            res.status(201).json(aula);
        })
        .catch(() => res.status(500).json('Error grave'));
});

function crearAula(aula) {
    return db.aula.create(aula)
        .then(respuesta => {
            console.log("\n***creando aula");
            console.log(JSON.stringify(respuesta));
            return respuesta;
        }).catch(error => console.log(error));
}




