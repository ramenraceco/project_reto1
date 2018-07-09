//esta es una modificacion de RAMENCOOOOO
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

