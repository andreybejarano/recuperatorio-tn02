const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();


router.get('/create', productController.create)

router.post('/create', productController.store)

module.exports = router;