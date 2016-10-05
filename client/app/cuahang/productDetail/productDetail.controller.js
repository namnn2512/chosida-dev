'use strict';

angular.module('chosidaApp')
  .controller('ProductDetailController', function ($scopre, $stateParams) {
    $scopre.store = $stateParams.store; 
    $scopre.id = $stateParams.id;
    $scopre.storeDetail= [{
      id : '1',
      name: 'Store Name',
      image : 'assets/images/iphone.jpg',
      store : 'thoitrang',
      description : 'Something of your store',
      product : [{
        productId :1,
        name: 'iphone1',
        subImg : 'assets/images/iphone.jpg'
      },
      {
        productId :2,
        name: 'iphone1',
        subImg : 'assets/images/iphone.jpg'
      },
      {
        productId :3,
        name: 'iphone1',
        subImg : 'assets/images/iphone.jpg'
      },
      {
        productId :4,
        name: 'iphone1 iphone1',
        subImg : 'assets/images/iphone.jpg'
      }]
    }]
  });
