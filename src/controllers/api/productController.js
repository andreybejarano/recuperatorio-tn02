const { response } = require('express');
const db = require('../database/models');

const controller = {
    index: (req, res) => {
        // Crear controladores para retornar todos los productos
        db.Product.findAll()
        .then((products) => {
            res.json(products);
        }).catch(err => {
            res.json(err);
        })
    }
}

module.exports = controller;
