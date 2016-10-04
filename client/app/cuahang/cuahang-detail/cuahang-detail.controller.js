'use strict';

angular.module('chosidaApp')
  .controller('StoreDetailController', function ($stateParams) {
  	var vm = this;
  	vm.store = $stateParams.store; 
  	vm.id = $stateParams.id;
  	vm.storeDetail= [{
  		id : '1',
  		name: 'Store Name',
  		image : 'assets/images/iphone.jpg',
  		store : 'thoitrang',
  		description : 'Something of your store',
      product : [{
        imgId :1,
        name: 'iphone1',
        subImg : 'assets/images/iphone.jpg'
      },
      {
        imgId :2,
        name: 'iphone1',
        subImg : 'assets/images/iphone.jpg'
      },
      {
        imgId :3,
        name: 'iphone1',
        subImg : 'assets/images/iphone.jpg'
      },
      {
        imgId :4,
        name: 'iphone1',
        subImg : 'assets/images/iphone.jpg'
      }]
  	}]
  });
