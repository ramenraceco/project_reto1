module.exports = (sequelize, DataType) => {
    const turnoCarrera = sequelize.define('turnoCarrera', {
        id_turnoCarrera: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER
        }
    }, {
            timestamps: false
    });
    //Asociaciones
    turnoCarrera.associate = (models) => {
        turnoCarrera.belongsTo(models.turno, {
            foreignKey: {
                name: 'id_turno',
                allowNull: false
            }
        });
        turnoCarrera.belongsTo(models.carrera, {
            foreignKey: {
                name: 'id_carrera',
                allowNull: false
            }
        });
    }
    return turnoCarrera;
};

