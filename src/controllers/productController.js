const { response } = require('express');
const db = require('../database/models');

const controller = {
    create: (req, res) => {
        db.Product.findAll(
            {
                include:[{assosiation: ProductCategory}]
            }
        )
        .then((products) =>{
            res.render('formProductCreate', {products});
        })
        
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

module.exports = controller