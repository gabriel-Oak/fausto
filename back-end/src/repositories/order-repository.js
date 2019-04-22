'use strict';
const express = require('express');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const router = express.Router();

exports.get = async() => {
    var res = await Order.find({});
    return res;
}

exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}

exports.update = async(id, data) => {
    const res = await Order
    .findByIdAndUpdate(id, {
        $set: {
            customer: data.customer,
            item: data.items,
            sotre: data.store
        }
    });
    return res;
}


exports.delete = async(id) => {
    const res = await Order
        .findOneAndRemove(id);
        return res;
} 
exports.getById = async(id) => {
    const res = await Order
    .findById(id);
    return res;
}