

const express = require('express');
const router = express.Router();
const ValidationContract = require('../validators/validator');
const repository = require('../repositories/product-repositorie');
const mongoose = require('mongoose');
//Carrega os Models
const Product = mongoose.model('Product');
module.exports = function() {

    const controller = {};
 
    controller.novo = async(req, res) => {
 
        
        let contract = new ValidationContract;
        contract.hasMinLen(req.body.title, 3, 'O titulo deve ter no minimo 3 caracteres');
        contract.hasMinLen(req.body.slug, 3, 'O slug deve ter no minimo 3 caracteres');
        contract.hasMinLen(req.body.description, 3, 'A Descrição deve ter no minimo 3 caracteres');
        contract.greatherThan(req.body.price,  'O valor tem de ser maior que 0');
    
        //se o dados forem invalidos para tudo
        if(!contract.isValid()){
            res.status(400).send(contract.errors()).end();
            return;
        }
    
        try{
        
            await repository.create(req.body);
            res.status(201).send({message: 'produto cadastrado com sucesso'});   
        } catch (e) {
            res.status(400).send({message: 'Falha ao cadastrar produto', 
            data: e});
        }
        
 
    }
 
    controller.listar = async(req, res) => {
 
        try {
            var data = await repository.get();
            //res.json(artigos).end();
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
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
 
    controller.atualizar = async(req, res) => {
 
        try{
            await repository.update(req.params.id, req.body);
            res.status(200).send({
               message: 'Produto atualizado com sucesso' 
            });
        } catch (e) {
                res.status(400).send({
                    message: 'Falha ao atualizar produto',
                    data: e
                });
        }
 
    }
 
    controller.excluir = async(req, res) => {
 
       try{
        await repository.delete(req.params.id);
        res.status(200).send({
               message: 'Produto removido com sucesso' 
            });
        } catch (e) {
            res.status(400).send({
                message: 'Falha ao remover produto',
                data: e
            });
        }
    }
    
    return controller;
 
 }