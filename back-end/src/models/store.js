'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    number:{
        type: String,
        required: true
    },
    address: {
        type: mongoose.Schema.ObjectId,
        ref: 'Address'
    }
    
});

module.exports = mongoose.model('Store', schema);