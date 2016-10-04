'use strict';

angular.module('chosidaApp')
    .controller('AddStoreCtrl', function ($scope, ManageStore) {
        $scope.errors = {};
        $scope.listOfCategories = {};

        $http.get('/menu').then(function (response) {
            $scope.listOfCategories = response.data;
        },function (response) {
                //error callback
            });

        $scope.addNewStore = function (form) {
            $scope.submitted = true;
            if (form.$valid) {
                ManageStore.createStore(form)
                    .then(function () {
                        $scope.message = 'Thêm cửa hàng thành công.';
                    })
                    .catch(function () {
                        form.password.$setValidity('mongoose', false);
                        $scope.errors.other = 'Incorrect password';
                        $scope.message = '';
                    });
            }
        };
    });
