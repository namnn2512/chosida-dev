'use strict';

angular.module('chosidaApp')
  .controller('ProductDetailController', function ($scope, $stateParams) {
    $scope.store = $stateParams.store; 
    $scope.id = $stateParams.id;
    $scope.selectedItem = {};
    $scope.storeDetail= [{
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
    $scope.imageList = [
    {
      id: 1 ,
      imgSrc : 'assets/images/iphone.jpg'
    }
    ,
    {
      id: 2 ,
      imgSrc : 'assets/images/screen.png'
    }
    ,
    {
      id: 3 ,
      imgSrc : 'assets/images/iphone.jpg'
    }];
    $scope.selectedItem = $scope.imageList[1].imgSrc;
    $scope.activeImage = function(obj, event) {
      $scope.selectedItem = obj.imgSrc;
    }
  });
