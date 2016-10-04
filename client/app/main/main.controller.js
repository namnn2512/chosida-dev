'use strict';

angular.module('chosidaApp')
  .controller('MainCtrl', function ($state) {
    var vm = this;
    vm.awesomeThings = [{
      name:'Store Name',
      image : 'assets/images/iphone.jpg',
      description : 'Some description',
      store:'thoitrang',
      id:'1'
    }];
    vm.goDetail = function() {
    	$state.go('cuahang', {'store':vm.awesomeThings[0].store,'id':vm.awesomeThings[0].id});
    };

  });
