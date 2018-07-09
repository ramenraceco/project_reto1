//se lo llama, requiero a express y lo guardo en una costante llamado express
const express = require('express');
const morgan =  require('morgan');

//se lo inicializa
const app = express();

//Settings
//set: establece una configuracion disponer una configuracion
//process.env.PORT: uso de variables de entorno en NODE, se utilizan para definir parámetros básicos en la configuración de los programas,
//y que estos se ejecuten en diferentes ambientes sin tener que editar el código fuente del script.
app.set('port',process.env.PORT || 3000);

//Middlewares >> son funciones que ayuda a procesar informacion antes de que lleguen a las URLś
app.use(morgan('dev'));
//este venia separado y teniamos que installar el body-parse ahora ya no por que ya viene con express
//app.use(express('json')); -----> este es el video y asi como esta no funciona
app.use(express.json());

//Routes >> aca nos enfocaremos en las URL's de nuestro servidor
app.use('/docente',require('./routes/docente'));
app.use('/task', require('./routes/task'));

//Static files >> aca le decimos donde estan nuestros archivo estaticos para el navegador es decir todo lo que esta en la carpeta "public"
//Use: Monta carga la función
app.use(express.static(__dirname + '/public'));
//console.log(__dirname + '/public');

/* --------------------------------------------------- BASE DE DATOS ------------------------------------------------ */

const db = require('./database');
db.sequelize.sync().done(() => {
   console.log("\n***Base de datos generada***");
});
//Server is listening
//get: obtener algo recibe algo
app.listen(app.get('port'),() =>{
    console.log('Server on port', app.get('port'));    
});

