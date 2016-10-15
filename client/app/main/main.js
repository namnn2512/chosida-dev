'use strict';

angular.module('chosidaApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                //abstract: true,
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('thoitrang', {
                url: '/thoi-trang',
                //abstract: true,
                params : { categoryId: '1', parentCategoryId: '1'},
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('quanao', {
                url: '/thoi-trang/quan-ao',
                //abstract: true,
                params : { categoryId: '2', },
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('giaydep', {
                url: '/thoi-trang/giay-dep',
                //abstract: true,
                params : { categoryId: '3', },
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('phukien', {
                url: '/thoi-trang/phu-kien',
                //abstract: true,
                params : { categoryId: '4', },
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('dodientu', {
                url: '/dien-tu',
                //abstract: true,
                params : { categoryId: '5', },
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('didong', {
                url: '/dien-tu/di-dong',
                //abstract: true,
                params : { categoryId: '6', },
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('maytinh', {
                url: '/dien-tu/may-tinh',
                //abstract: true,
                params : { categoryId: '7', },
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('laptop', {
                url: '/dien-tu/lap-top',
                //abstract: true,
                params : { categoryId: '8', },
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('mayanh', {
                url: '/dien-tu/may-anh',
                //abstract: true,
                params : { categoryId: '9', },
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('mayquay', {
                url: '/dien-tu/may-quay',
                //abstract: true,
                params : { categoryId: '10', },
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('dienmay', {
                url: '/dien-tu/dien-may',
                //abstract: true,
                params : { categoryId: '11', },
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('dienlanh', {
                url: '/dien-tu/dien-lanh',
                //abstract: true,
                params : { categoryId: '12', },
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });
    });
