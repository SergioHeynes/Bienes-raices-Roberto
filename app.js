const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require ('./controllers/error');
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const storeRoutes = require('./routes/store');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(storeRoutes);

app.use(errorController.get404);

sequelize.sync()
  .then(result => {
    // console.log(result)
    app.listen(3000, () => {
      console.log('');
      console.log('***************************');
      console.log('Server started on Port 3000');
      console.log('***************************');
    });
  })
  .catch(err => {
    console.log(err);
  });




