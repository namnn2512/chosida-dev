'use strict';

angular.module('chosidaApp')
    .controller('MainCtrl', function($stateParams, $state, $scope, Store) {

        $scope.currentPage = 1;
        $scope.numPerPage = 60;
        $scope.maxSize = 5;
        $scope.total = 0;
        $scope.stores = {};
        
        $scope.getListStores = function() {
            Store.getAllStore('DNG', angular.isUndefined($stateParams.categoryId) ? 1 : $stateParams.categoryId, { pagesize: $scope.numPerPage, pagenum: $scope.currentPage })
                .then(
                function(response) {
                    $scope.stores = response.data.stores;
                    $scope.total = response.data.total;
                },

                function(httpError) {
                    // translate the error
                    throw httpError.status + " : " +
                    httpError.data;
                });
        };

        $scope.goDetail = function() {
            $state.go('cuahang', { 'store': 'thoitrang', 'id': 1 });
        };

        $scope.$watch('currentPage + numPerPage', function() {
           $scope.getListStores();
        });

    });
