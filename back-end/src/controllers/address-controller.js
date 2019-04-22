'use strict';
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Customer = mongoose.model('Address');


const repository = require('../repositories/address-repositorie');

module.exports = function() {
    const controller = {};

    controller.listar = async(req, res) => {
        try {
            var data = await repository.get();
            res.status(200).send(data);
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            });
        }
    }

    controller.novo = async(req, res) => {

        try{
        
            await repository.create(req.body);
            res.status(201).send({message: 'Sucesso ao processar sua requisição'});   
        } catch (e) {
            res.status(400).send({message: 'Falha ao processar sua requisição', 
            data: e});
        }
        
    }

    controller.atualizar = async(req, res) => {
        try{
            await repository.update(req.params.id, req.body);
            res.status(200).send({
            message: 'Sucesso ao processar sua requisição' 
            });
        } catch (e) {
                res.status(400).send({
                    message: 'Falha ao processar sua requisição',
                    data: e
                });
        }
    }


    controller.excluir = async(req, res) => {
        try{
            await repository.delete(req.params.id);
            res.status(200).send({
                message: 'Sucesso ao processar sua requisição' 
                });
            } catch (e) {
                res.status(400).send({
                    message: 'Falha ao processar sua requisição',
                    data: e
                });
            }
    }

    controller.obterUm = async(req, res) => {
    
        try{
            var data = await repository.getById(req.params.id);
            res.status(200).send(data);
            } catch (e) {
                res.status(400).send({
                    message: 'Falha ao processar sua requisição'
                });
            }

    }
    return controller;
}