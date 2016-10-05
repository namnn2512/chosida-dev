'use strict';

angular.module('chosidaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cuahang', {
        url: '/cuahang/:store/:id',
        templateUrl: 'app/cuahang/cuahang-detail/cuahang-detail.html',
        controller: 'StoreDetailController',
        params : {
          'store':null,
          'id':null
        }
<<<<<<< HEAD
      })
      .state('sanpham', {
        url: '/:store/:id/:idsanpham',
        templateUrl: 'app/cuahang/productDetail/productDetail.html',
        controller: 'StoreDetailController',
        params : {
          'store':null,
          'id':null,
          'idsanpham' : null
        }
=======
      }).state('addcuahang', {
        url: '/themcuahang',
        templateUrl: 'app/cuahang/addCuaHang/addCuaHang.html',
        controller: 'AddStoreCtrl',
        controllerAs :'addStore'
>>>>>>> b4078ef8fb5afbef8b769c45a84a862eeabe85f6
      });
  });
