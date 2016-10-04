'use strict';

angular.module('chosidaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cuahang', {
        url: '/:store/:id',
        templateUrl: 'app/cuahang/cuahang-detail/cuahang-detail.html',
        controller: 'StoreDetailController',
        controllerAs :'detail',
        params : {
          'store':null,
          'id':null
        }
      });
  });
