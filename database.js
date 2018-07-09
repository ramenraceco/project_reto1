const pg = require('pg');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};
const namebase = 'basehorarios';

const sequelize = new Sequelize(namebase, 'postgres', 'gatitoT21', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    sync: { force: false },
});
sequelize.authenticate().then(() => {
                        console.log('Probando la Conexión a la base de datos: correcta');
                    })
                        .catch(err => {
                        console.error('No es posible conectarse a la base de datos', err);
                    });
//EJECUTAR LOS MODELOS
const directorioModelos = __dirname + '/models';
// Y LOS VA LEER
fs
    .readdirSync(directorioModelos)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== namebase) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(directorioModelos, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
         db[modelName].associate(db);
    }
});
// Cargando la variable db
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// Exportando
module.exports = db;