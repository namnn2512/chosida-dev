'use strict';

angular.module('chosidaApp')
    .controller('AddStoreCtrl', function($scope, $http, ManageStore, Auth) {
        $scope.store = {};
        $scope.errors = {};
        $scope.listOfCategories = {};
        $scope.cities = {};
        $http.get('/menu').then(function(response) {
            $scope.listOfCategories = response.data;
        }, function(response) {
            //error callback
        });
        $http.get('/city').then(function(response) {
            $scope.cities = response.data;
        }, function(response) {
            //error callback
        });


        $scope.addNewStore = function(form) {
            $scope.submitted = true;
            if (form.$valid) {
                ManageStore.createStore({
                    name: $scope.store.name,
                    info: $scope.store.info,
                    address: $scope.store.address,
                    cityId: $scope.store.cityId,
                    imgUrl: $scope.store.imgUrl,
                    categoryId: $scope.store.categoryId,
                })
                    .then(function() {
                        $scope.message = 'Thêm cửa hàng thành công.';
                    })
                    .catch(function() {
                        form.password.$setValidity('mongoose', false);
                        $scope.errors.other = 'Incorrect password';
                        $scope.message = '';
                    });
            }
        };
    });
