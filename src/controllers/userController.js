const { response } = require('express');
const res = require('express/lib/response');
const db = require('../database/models');

const controller = {
    create: (req, res) => {
        res.render('formUserCreate');
    },
    store: (req, res) => {
        const userToCreate = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            roles_id: req.body.vendedor,
            roles_id: req.body.administrador,
        };
        db.User.create(userToCreate)
        .then(response => {
            res.redirect('/');
        })
        .catch(err => {
            res.send(err);
        })
    }
}

module.exports = controller;