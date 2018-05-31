module.exports = (sequelize, DataType) => {
    const hora = sequelize.define('hora', {
        id_hora: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        hora_Inicio: {
            type: DataType.STRING(100),
            allowNulll: false,
        },
        hora_Final: {
            type: DataType.STRING(100),
            allowNulll: false,
        },
        fid_materia: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        fid_aula: {
            type: DataType.INTEGER,
            allowNull: false,
        },
    });
   
    hora.associate = (models) => {
        hora.belongsTo(models.materia, { as: 'materia', foreignKey: { name: 'fid_materia', allowNull: false } });
    };

    hora.associate = (models) => {
        hora.belongsTo(models.aula, { as: 'aula', foreignKey: { name: 'fid_aula', allowNull: false } });
    };
    return hora;
};

