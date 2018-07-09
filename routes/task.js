//URL's de nuestras RESTapi o las de las operaciones que pueda hacer el servidor
const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
    res.send('API ->tengo muchas tareas por hacer')
});

module.exports = router;


