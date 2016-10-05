'use strict';

angular.module('chosidaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cuahang', {
        url: '/:store/:id',
        templateUrl: 'app/cuahang/cuahang-detail/cuahang-detail.html',
        controller: 'StoreDetailController',
        params : {
          'store':null,
          'id':null
        }
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
      });
  });
