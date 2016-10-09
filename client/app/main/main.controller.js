'use strict';

angular.module('chosidaApp')
  .controller('MainCtrl', function ($state, $scope, Store) {
    $scope.stores = Store.query(function(){
        if(angular.isUndefined($scope.stores) || $scope.stores.length == 0){
            $scope.stores = [{
                name: 'Addidas',
                imgUrl: 'assets/images/iphone.jpg',
                info: 'Chuyên thời trang thể thao'
            },
            {
                name: 'Nike',
                imgUrl: 'assets/images/iphone.jpg',
                info: 'Chuyên thời trang thể thao'
            },
            {
                name: 'New Balance',
                imgUrl: 'assets/images/iphone.jpg',
                info: 'Chuyên thời trang thể thao'
            },
            {
                name: 'Bitis',
                imgUrl: 'assets/images/iphone.jpg',
                info: 'Chuyên thời trang thể thao'
            }];
        }
    });
    $scope.goDetail = function() {
    	$state.go('cuahang', {'store':'thoitrang','id':1});
    };

  });
