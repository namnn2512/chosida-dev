'use strict';

angular.module('chosidaApp')
  .controller('MainCtrl', function () {
    var vm = this;

    vm.awesomeThings = [];
    vm.awesomeThings = [{
      name:'Store Name',
      image : 'assets/images/iphone.jpg',
      description : 'Some description'
    }];

  });
