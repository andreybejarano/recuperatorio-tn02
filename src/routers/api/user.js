const express = require('express');

const userController = require('../../controllers/api/userController');

const router = express.Router();

/*Retorna la vista*/
router.get('/create', userController.index);


/*Almacena los usuarios*/
router.post('/create', userController.store);

// Implementar logica para retornar todos los usuarios
// router.???('/', userController.index);

module.exports = router;