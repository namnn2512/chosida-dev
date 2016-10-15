/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Store = require('../api/store/store.model');
//var User = require('../api/user/user.model');
Store.find({}).remove(function(err, removed) {
    var pad = "0000";
    
    for (var i = 1; i <= 1200; i++) {
        var ans = pad.substring(0, pad.length - i.toString().length) + i.toString();

        Store.create({
            name: 'Quần áo ' + ans,
            imgUrl: 'assets/images/iphone.jpg',
            info: 'Chuyên thời trang thể thao',
            cityId: 'DNG',
            userId: '123',
            categoryId: '2',
            parentCategoryId: '1'
        });
    }
    
     for (var j = 1; j <= 1200; j++) { 
        var ans1 = pad.substring(0, pad.length - j.toString().length) + j.toString()

        Store.create({
            name: 'giày dép' + ans1,
            imgUrl: 'assets/images/iphone.jpg',
            info: 'Chuyên thời trang thể thao',
            cityId: 'DNG',
            userId: '123',
            categoryId: '3',
            parentCategoryId: '1'
        });
    }
});

