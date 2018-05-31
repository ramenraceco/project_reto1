module.exports = (sequelize, DataType) => {
    const docente = sequelize.define('docente', {
        id_docente: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombres_D: {
            type: DataType.STRING(100),
            allowNulll: false,
        },
        apellidos_D: {
            type: DataType.STRING(100),
            allowNulll: false,
        },
        especialidad_D: {
            type: DataType.STRING(100),
            allowNulll: false,
        },
    }); 

    docente.associate = (models) => {
        docente.hasMany(models.materia, { as: 'materia', foreignKey: { name: 'fid_docente', allowNull: false } });
    };
    return docente;

};
