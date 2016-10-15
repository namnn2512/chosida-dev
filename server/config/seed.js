/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Store = require('../api/store/store.model');
//var User = require('../api/user/user.model');
Store.find({}).remove(function(err, removed) {
    for (var i = 1; i <= 1000; i++) {
        Store.create({
            name: 'Quần áo ' + i,
            imgUrl: 'assets/images/iphone.jpg',
            info: 'Chuyên thời trang thể thao',
            cityId: 'DNG',
            userId: '123',
            categoryId: '2'
        });
    }
    
     for (var i = 1; i <= 1000; i++) {
        Store.create({
            name: 'giầy dép' + i,
            imgUrl: 'assets/images/iphone.jpg',
            info: 'Chuyên thời trang thể thao',
            cityId: 'DNG',
            userId: '123',
            categoryId: '3'
        });
    }
});

