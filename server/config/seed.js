/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Store = require('../api/store/store.model');
//var User = require('../api/user/user.model');

Store.find({}).remove();
