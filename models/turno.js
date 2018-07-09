module.exports = (sequelize, DataType) => {
    const turno = sequelize.define('turno', {
        id_turno: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataType.INTEGER
        },
        tipo_turno: {
            allowNull: false,
            type: DataType.STRING
        }
    }, {
            timestamps: false
    });
    //Asociaciones 
    
    return turno;
};

