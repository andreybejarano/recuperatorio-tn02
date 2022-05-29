module.exports = (sequelize, dataTypes) => {
    let alias = 'User'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        roles_id: {
            type: dataTypes.INTEGER
        }
    };
    let config= {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.belongsTo(models.Role, { 
            as: "role",
            foreignKey: "roles_id"
        })
    }

    return User;
};