module.exports = (sequelize, DataType) => {
    const materia = sequelize.define('materia', {
        id_materia: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_M: {
            type: DataType.STRING(100),
            allowNulll: false,
        },
        fid_docente: {
            type: DataType.INTEGER,
            allowNull: false,
        },
    });

    materia.associate = (models) => {
        materia.hasMany(models.hora, { as: 'hora', foreignKey: { name: 'fid_materia', allowNull: false } });
    };

    materia.associate = (models) => {
        materia.belongsTo(models.docente, { as: 'docente', foreignKey: { name: 'fid_docente', allowNull: false } });
    };

    return materia;

};
