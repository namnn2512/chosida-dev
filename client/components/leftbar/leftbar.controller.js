'use strict';

angular.module('chosidaApp')
  .controller('LeftbarController',function ($http){
    var self = this;
     $http.get('../components/utils/menu.json').then(function(response) {
      self.menu = response.data;
      console.log(self.menu);
    });
});

angular.module('chosidaApp')
.component('leftShop', {
  templateUrl: 'components/leftbar/leftbar.html',
  controller: 'LeftbarController',
  controllerAs :'leftbar'
});
