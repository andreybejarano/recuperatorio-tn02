const express = require('express');
const userController = require('../../controllers/api/userController');

const router = express.Router();

router.get('/', userController.index);

router.post('/', userController.store);

// Implementar logica para retornar todos los usuarios
// router.???('/', userController.index);

module.exports = router;