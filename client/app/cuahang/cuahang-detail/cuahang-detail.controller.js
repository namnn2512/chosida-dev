'use strict';

angular.module('chosidaApp')
  .controller('StoreDetailController', function ($scope, $stateParams, $state) {
  	$scope.store = $stateParams.store; 
  	$scope.id = $stateParams.id;
  	$scope.storeDetail= [{
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
        name: 'iphone1 iphone1',
        subImg : 'assets/images/iphone.jpg'
      }]
  	}]
    $scope.goDetail = function(product) {
      $state.go("sanpham", {"id":$scope.storeDetail[0].id,"store":$scope.storeDetail[0].store,"idsanpham":product.imgId});
    }
  });
