'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/store-controller');

router.put('/', controller().novo);
router.get('/', controller().listar);
router.get('/:id', controller().obterUm);
router.patch('/:id', controller().atualizar);
router.delete('/:id', controller().excluir);



module.exports = router;