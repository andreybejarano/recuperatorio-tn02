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
    },
    create: (req, res) => {
        res.render('formProductCreate');
    },
    store: (req, res) => {
        const ProductToCreate = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category
        };
        db.Product.create(ProductToCreate)
        .then(response => {
            res.redirect('/');
        })
        .catch(err => {
            res.send(err);
        })
    }
}

module.exports = controller;
