'use strict';
const express = require('express');
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const router = express.Router();

exports.get = async() => {
    var res = await Customer.find({});
    return res;
}

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}

exports.update = async(id, data) => {
    const res = await Customer
    .findByIdAndUpdate(id, {
        $set: {
            nome: data.nome,
            email: data.email,
            password: data.password,
            address: data.address
        }
    });
    return res;
}

exports.delete = async(id) => {
    const res = await Customer
        .findOneAndRemove(id);
        return res;
} 

exports.getById = async(id) => {
    const res = await Customer
    .findById(id);
    return res;
}