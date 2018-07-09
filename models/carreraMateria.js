module.exports = (sequelize, DataType) => {
    const carreraMateria = sequelize.define('carreraMateria', {
        id_carreraMateria: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER
        }
    }, {
            timestamps: false
    });
    //Asociaciones
    carreraMateria.associate = (models) => {
        carreraMateria.belongsTo(models.carrera, {
            foreignKey: {
                name: 'id_carrera',
                allowNull: false
            }
        });
        carreraMateria.belongsTo(models.materia, {
            foreignKey: {
                name: 'id_materia',
                allowNull: false
            }
        });
    }
    return carreraMateria;
};

