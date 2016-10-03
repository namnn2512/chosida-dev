'use strict';

angular.module('chosidaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cuahang', {
        url: '/cuahang',
        templateUrl: 'app/cuahang/cuahang-detail/cuahang-detail.html',
        controller: 'StoreDetailController'
      });
  });
