const express = require('express');

const storeController = require('../controllers/store');

const router = express.Router();

router.get('/', storeController.getProperties);

module.exports = router;