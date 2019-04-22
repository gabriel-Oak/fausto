'use strict';
const express = require('express');
const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const router = express.Router();

exports.get = async() => {
    const res = await Store.find({});
    return res;
}

exports.create = async(data) => {
    var store = new Store(data);
    await store.save();
}

exports.update = async(id, data) => {
    const res = await Store
    .findByIdAndUpdate(id, {
        $set: {
            number:data.number,
            address:data.address
        }
    });
    return res;
}

exports.delete = async(id) => {
    const res = await Store
        .findOneAndRemove(id);
        return res;
} 
exports.getById = async(id) => {
    const res = await Store
    .findById(id);
    return res;
}