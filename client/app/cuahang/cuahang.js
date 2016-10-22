'use strict';

angular.module('chosidaApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('cuahang', {
                url: '/cuahang/:store/:id',
                templateUrl: 'app/cuahang/cuahang-detail/cuahang-detail.html',
                controller: 'StoreDetailController',
                params: {
                    'store': null,
                    'id': null
                }
            })
            .state('sanpham', {
                url: '/cuahang/:store/:id/:idsanpham',
                templateUrl: 'app/cuahang/productDetail/productDetail.html',
                controller: 'ProductDetailController',
                params: {
                    'store': null,
                    'id': null,
                    'idsanpham': null
                }
            }).state('addcuahang', {
                url: '/themcuahang',
                templateUrl: 'app/cuahang/addCuaHang/addCuaHang.html',
                controller: 'AddStoreCtrl',
                controllerAs: 'addStore'
            }).state('quanlycuahang', {
                url: '/quanly-cuahang',
                templateUrl: 'app/cuahang/quanly-cuahang/quanly-cuahang.html',
                controller: 'ManageStoreController'
            });
    });
