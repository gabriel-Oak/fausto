'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customer: {
        type: mongoose.Schema.ObjectId,
        ref: 'Customer',
        required: true
    },

    store: {
        type: mongoose.Schema.ObjectId,
        ref: 'Store',
        required: true
    },
    
    
    number: {
        type: String,
        required: true
    },

    createData: {
        type: Date,
        required: true,
        default: Date.now
    },

    status: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },

    item:{

        product: {
            type: mongoose.Schema.ObjectId,
            ref: 'Product'
        }
    }
    
});

module.exports = mongoose.model('Order', schema);