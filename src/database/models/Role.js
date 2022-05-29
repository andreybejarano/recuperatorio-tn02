module.exports = (sequelize, dataTypes) => {
    let alias = 'Role'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config= {
        tableName: "roles",
        timestamps: false
    }
    const Rol = sequelize.define(alias, cols, config);

    return Rol;
};