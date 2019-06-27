const express = require('express');

const router = express.Router();


router.get('/add-property', (req, res, next) => {
    res.send('<form action="/admin/add-property" method="POST"><input type="text" name="title"><button type="submit">Add product</button>');
});

router.post('/add-property', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

router.get('/edit-property', (req, res, next) => {
    res.render('admin/edit-property');
});


module.exports = router;