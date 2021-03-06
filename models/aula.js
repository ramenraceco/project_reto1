module.exports = (sequelize, DataType) => {
    const aula = sequelize.define('aula', {
        id_aula: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER
        },
        nombre_au: {
            allowNull: false,
            type: DataType.STRING
        },
        ubicacion_au: {
            allowNull: false,
            type: DataType.STRING
        }
    }, {
            timestamps: false
    });
    //Asociaciones
    aula.associate = (models) => {
        aula.hasMany(models.materia, {
            as: 'materia',
            foreignKey: {
                name: 'id_aula',
                allowNull: false
            }
        });
    }
    return aula;
};

