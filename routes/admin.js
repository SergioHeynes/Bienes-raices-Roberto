const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-property', adminController.getAddProperty);

router.post('/add-property', adminController.postAddProperty);

router.get('/properties-list', adminController.getPropertiesList);

module.exports = router;