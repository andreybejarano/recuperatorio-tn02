const db = require('../database/models');

const controller = {
    create: (req, res) => {
        res.render('formUserCreate');
    },
    store:(req, res) => {
        const userTocreate = {
            name: req.body.name,
            email:req.body.email
        };
        debug.user.create(userTocreate)
        .then(response => {
            res.redirect('/');
        })
        .ctach(err => {
            res.send(err);
        })
    }
}

module.exports = controller;