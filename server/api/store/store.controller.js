/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /stores              ->  index
 * POST    /stores              ->  create
 * GET     /stores/:id          ->  show
 * PUT     /stores/:id          ->  update
 * DELETE  /stores/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Store = require('./store.model');

// Get list of stores
exports.index = function(req, res) {
  Store.find(function (err, stores) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(stores);
  });
};

// Get a single store
exports.show = function(req, res) {
  Store.findById(req.params.id, function (err, store) {
    if(err) { return handleError(res, err); }
    if(!store) { return res.status(404).send('Not Found'); }
    return res.json(store);
  });
};

// Get a list stores by userid
exports.getListStoresbyUserId = function(req, res) {
  Store.find({ userId : req.params.id }, function(err, stores){
     if(err) { return handleError(res, err); }
    return res.status(200).json(stores);
  });
};

// Creates a new store in the DB.
exports.create = function(req, res) {
  var newStore = new Store(req.body);
  newStore.userId = req.user._id;
  var menu = require("../config/menu.json");
  Store.create(newStore, function(err, store) {
    if(err) { 
        return handleError(res, err); 
    }
    return res.status(201).json(store);
  });
};

// Updates an existing store in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Store.findById(req.params.id, function (err, store) {
    if (err) { return handleError(res, err); }
    if(!store) { return res.status(404).send('Not Found'); }
    var updated = _.merge(store, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(store);
    });
  });
};

// Deletes a store from the DB.
exports.destroy = function(req, res) {
  Store.findById(req.params.id, function (err, store) {
    if(err) { return handleError(res, err); }
    if(!store) { return res.status(404).send('Not Found'); }
    store.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
