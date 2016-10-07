'use strict';

angular.module('chosidaApp')
    .controller('AddStoreCtrl', function($scope, $http, ManageStore, UploadFile) {
        $scope.store = {};
        $scope.errors = {};
        $scope.listOfCategories = {};
        $scope.cities = {};
        $scope.isHasImage = false;
        $scope.imageUrl = '';
        $scope.noImage = 'assets/images/noImage.gif';
  
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
            if (form.$valid && $scope.isHasImage && $scope.imageUrl.length > 0) {
              
               //get parent categoryId
                angular.forEach($scope.listOfCategories, function (c, i) {
                    angular.forEach(c.Menus, function (m, i) {
                        if (m.categoryId === $scope.store.categoryId) {
                            $scope.store.parentCategoryId = m.parentCategoryId;
                            console.log($scope.store.parentCategoryId);
                        }
                    });          
                });
              
                ManageStore.createStore({
                    name: $scope.store.name,
                    info: $scope.store.info,
                    address: $scope.store.address,
                    cityId: $scope.store.cityId,
                    imgUrl: $scope.imageUrl,
                    parentCategoryId: $scope.store.parentCategoryId,
                    categoryId: $scope.store.categoryId
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
            if ($scope.form.file.$valid && $scope.file) { //check if from is valid
                UploadFile.upload($scope.file) //call upload function
                .then(function (resp) { //upload function returns a promise
                    if (resp.data.error_code === 0) { //validate success
                        console.log(resp.data);
                        if(resp.data && resp.data.file && resp.data.file.filename){
                            $scope.imageUrl = 'assets/images/' + resp.data.file.filename;
                            $scope.isHasImage = true;
                        }
                               
                    } else {
                        console.log('an error occured');
                      console.log(resp);
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
