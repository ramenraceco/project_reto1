module.exports = (sequelize, DataType) => {
    const carrera = sequelize.define('carrera', {
        id_carrera: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER
        },
        nombre_carrera: {
            allowNull: false,
            type: DataType.STRING
        }
    }, {
            timestamps: false
    });
    //Asociaciones
    carrera.associate = (models) => {
        carrera.hasMany(models.semestre, {
            as: 'semestre',
            foreignKey: {
                name: 'id_carrera',
                allowNull: false
            }
        });
    }
    return carrera;
};

