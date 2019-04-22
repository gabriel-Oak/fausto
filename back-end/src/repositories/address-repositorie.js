'use strict';
const express = require('express');
const mongoose = require('mongoose');
const Address = mongoose.model('Address');
const router = express.Router();

exports.get = async() => {
    var res = await Address.find({});
    return res;
}

exports.create = async(data) => {
    var add = new Address(data);
    await add.save();
}

exports.update = async(id, data) => {
    const res = await Address
    .findByIdAndUpdate(id, {
        $set: {
            contry: data.contry,
            state: data.state,            
            postal: data.postal,
            street: data.street,
            number: data.number,
            district: data.district
        }
    });
    return res;
}

exports.delete = async(id) => {
    const res = await Address
        .findOneAndRemove(id);
        return res;
} 

exports.getById = async(id) => {
    const res = await Address
    .findById(id);
    return res;
}