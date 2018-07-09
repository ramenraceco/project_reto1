module.exports = (sequelize, DataType) => {
    const semestre = sequelize.define('semestre', {
        id_semestre: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER
        },
        nombre_sem: {
            allowNull: false,
            type: DataType.STRING
        }
    }, {
            timestamps: false
    });
    //Asociaciones

    return semestre;
};

