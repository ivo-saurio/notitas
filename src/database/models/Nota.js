module.exports = function (sequelize, dataTypes) {
    let alias = "Nota";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            notNull: true,
            primaryKey: true,
            auntoIncrement: true 

        },
        title: {
            type: dataTypes.STRING,
            notNull: true
        },
        message: {
            type: dataTypes.STRING,
            notNull: true
        },
    }
    let config = {
        tableName: 'notitas',
        timestamps: false
    }
    const Nota = sequelize.define(alias,cols,config)
    
    return Nota
}
