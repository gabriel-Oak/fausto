'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');

const mgoptions = {
    useNewUrlParser: true
};

//conecta ao baanco de dados
//mongoose.connect('mongodb://otrolado:otrolado1@ds018248.mlab.com:18248/nstr', mgoptions);
const db = require('../config/database');
db('mongodb://localhost:27017/otrolado');

//Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');
const Address = require('./models/Address');
const Store = require('./models/store');


// ----------------- ROTAS -------------------//
const index = require('./routes/index');
const product = require('./routes/product-routes');
const customer = require('./routes/customer-routes');
const order = require('./routes/order-routes');
const address = require('./routes/address-routes');
const store = require('./routes/store-routes');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



app.use('/', index);
app.use('/products', product);
app.use('/customers', customer);
app.use('/orders', order);
app.use('/address', address);
app.use('/store', store);


//-------------------------------------------//



module.exports = app;