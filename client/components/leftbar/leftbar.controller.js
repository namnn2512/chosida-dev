'use strict';

angular.module('chosidaApp')
  .controller('LeftbarController',function ($http){
    var self = this;
    $http.get('/menu').then(function(response) {
      self.menu = response.data;
    },
    function(response){
        //error callback
    });
});

angular.module('chosidaApp')
.component('leftShop', {
  templateUrl: 'components/leftbar/leftbar.html',
  controller: 'LeftbarController',
  controllerAs :'leftbar'
});
