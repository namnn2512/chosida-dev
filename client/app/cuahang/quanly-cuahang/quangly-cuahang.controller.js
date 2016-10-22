angular.module('chosidaApp')
    .controller('ManageStoreController', function($scope, Store) {
        $scope.listStore = {};

        Store.getStorebyUserId().then(function(respone) {
            $scope.listStore = respone.data;
        }).catch(function() {
            $scope.listStore = {};
        });
    });