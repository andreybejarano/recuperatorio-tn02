const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/create', userController.create);
router.post('/create', userController.store);

module.exports = router;