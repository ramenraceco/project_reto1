module.exports = (sequelize, DataType) => {
    const docente = sequelize.define('docente', {
        id_docente: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER
        },
        nombre_doc: {
            allowNull: false,
            type: DataType.STRING
        },
        apellido_doc: {
            allowNull: false,
            type: DataType.STRING
        }
    }, {
            timestamps: false
    });
    //Asociaciones
    docente.associate = (models) => {
        docente.hasMany(models.materia, {
            as: 'materia',
            foreignKey: {
                name: 'id_docente',
                allowNull: false
            }
        });
    }
    return docente;
};

