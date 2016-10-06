'use strict';

angular.module('chosidaApp')
    .controller('AddStoreCtrl', function($scope, $http, ManageStore, UploadFile) {
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
  
        $scope.uploadImage = function () {
            if ($scope.upload_form.file.$valid && $scope.file) { //check if from is valid
                UploadFile.upload($scope.file) //call upload function
                .then(function (resp) { //upload function returns a promise
                    if (resp.data.error_code === 0) { //validate success
                        console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
                    } else {
                        console.log('an error occured');
                    }
                }, function (resp) { //catch error
                    console.log('Error status: ' + resp.status);
                }, function (evt) {
                    console.log(evt);
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                    $scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
                });
            }
        };
    });
