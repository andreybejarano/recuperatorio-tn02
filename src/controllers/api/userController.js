const { responser } = require('express');
const db = require('../database/model');

const userController = {
    index: (req, res) => {
        // Crear controladores para retornar todos los usuarios
        db.User.findAll({
            include:[{assosiation: Role}]
        })
            .then(user => {
                res.json(user);
            }).catch(err=> {
                res.json(err);
            })
    }
}

module.exports = userController;