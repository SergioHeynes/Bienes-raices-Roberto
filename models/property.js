const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Property = sequelize.define('property', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  calle_y_numero: {
    type: Sequelize.STRING,
    allowNull: false
  },
  colonia_o_fracc: {
    type: Sequelize.STRING,
    allowNull: false
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false
  },
  subcategoria: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imagen_Url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descripcion: {
    type: Sequelize.STRING,
    allowNull: false
  },
  precio: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

module.exports = Property;
