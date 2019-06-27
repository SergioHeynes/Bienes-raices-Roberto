const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('store/index');
});

router.get('/about', (req, res) => {
    res.render('store/about');
});

router.get('/contact', (req, res) => {
    res.render('store/contact');
});

router.get('/properties-list', (req, res) => {
    res.render('store/properties-list');
});


module.exports = router;