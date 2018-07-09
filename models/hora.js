module.exports = (sequelize, DataType) => {
    const hora = sequelize.define('hora', {
        id_hora: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER
        },
        hora_ini: {
            allowNull: false,
            type: DataType.STRING
        },
        hora_fin: {
            allowNull: false,
            type: DataType.STRING
        }
    }, {
            timestamps: false
    });
    //Asociaciones
    hora.associate = (models) => {
        hora.hasMany(models.materia, {
            as: 'materia',
            foreignKey: {
                name: 'id_hora',
                allowNull: false
            }
        });
    }
    return hora;
};

