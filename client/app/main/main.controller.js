'use strict';

angular.module('chosidaApp')
  .controller('MainCtrl', function ($state) {
    var vm = this;
    vm.awesomeThings = [{
      name:'Store Name',
      image : 'assets/images/iphone.jpg',
      description : 'Some description'
    }];
    vm.goDetail = function() {
    	$state.go('cuahang');
    };

  });
