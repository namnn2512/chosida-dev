'use strict';

angular.module('chosidaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cuahang', {
        url: '/cuahang/:store/:id',
        templateUrl: 'app/cuahang/cuahang-detail/cuahang-detail.html',
        controller: 'StoreDetailController',
        controllerAs :'detail',
        params : {
          'store':null,
          'id':null
        }
      }).state('addcuahang', {
        url: '/themcuahang',
        templateUrl: 'app/cuahang/addCuaHang/addCuaHang.html',
        controller: 'AddStoreCtrl',
        controllerAs :'addStore'
      });
  });
