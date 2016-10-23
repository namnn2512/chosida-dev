'use strict';

var express = require('express');
var controller = require('./store.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/getStoresByUserId', auth.isAuthenticated(), controller.getListStoresbyUserId);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.post('/getAllStore', controller.getStoreswithPaging);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.put('/:id/inactiveStore', auth.isAuthenticated(), controller.inactiveStore);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
