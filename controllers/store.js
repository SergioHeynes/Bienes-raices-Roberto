const Property = require('../models/property');

exports.getProperties = (req, res, next) => {
  Property.findAll()
  .then(properties => {
    res.render('store/index', { 
      pageTitle: 'Inicio',
      props: properties,
      path: '/'
    });
  })
  .catch(err => {
    console.log(err);
  });




}