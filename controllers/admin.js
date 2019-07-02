const Property = require('../models/property');

exports.getAddProperty = (req, res, next) => {
  res.render('admin/add-property', { 
      pageTitle: 'Añadir propiedad',
      path: '/admin/add-property' 
  });
}
  
exports.postAddProperty = (req, res, next) => {
  const { street, subburb, category, subcategory, imageUrl, description, price } = req.body;
  Property.create({
    calle_y_numero: street,
    colonia_o_fracc: subburb,
    categoria: category,
    subcategoria: subcategory,
    imagen_Url: imageUrl,
    descripcion: description,
    precio: price,
  })
  .then(result => {
    // console.log(result);
    console.log('Property successfully added to database');
    res.redirect('/');
  })
  .catch(err => {
    console.log(err);
  }); 
}

exports.getPropertiesList = (req, res, next) => {
  Property.findAll()
  .then(properties => {
    res.render('store/index', { 
      pageTitle: 'Propiedades',
      path: '/admin/properties-list',
      props: properties
    });
  })
  .catch(err => {
    console.log(err);
  });
}
  
  