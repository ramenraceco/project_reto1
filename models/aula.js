module.exports = (sequelize, DataType) => {
    const aula = sequelize.define('aula', {
        id_aula: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_A: {
            type: DataType.STRING(100),
            allowNulll: false,
        },
        ubicacion_A: {
            type: DataType.STRING(100),
            allowNulll: false,
        },
        capacidad_A: {
            type: DataType.STRING(100),
            allowNulll: false,
        },
    });

    aula.associate = (models) => {
        aula.hasMany(models.hora, { as: 'hora', foreignKey: { name: 'fid_aula', allowNull: false } });
    };
    return aula;
};
