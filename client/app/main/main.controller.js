'use strict';

angular.module('chosidaApp')
  .controller('MainCtrl', function ($state, $scope) {
    $scope.awesomeThings = [{
      name:'Store Name',
      image : 'assets/images/iphone.jpg',
      description : 'Some description',
      store:'thoitrang',
      id:'1'
    }];
    $scope.goDetail = function() {
    	$state.go('cuahang', {'store':$scope.awesomeThings[0].store,'id':$scope.awesomeThings[0].id});
    };

  });
