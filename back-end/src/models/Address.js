'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    contry: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },
    
    postal:{
        type: String,
        required: true
    },

    street:{
        type: String,
        required: true
    },

    number:{
        type: String,
        required: true
    },

    district:{
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Address', schema);