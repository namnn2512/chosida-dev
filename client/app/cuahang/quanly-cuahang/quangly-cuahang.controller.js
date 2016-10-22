angular.module('chosidaApp')
    .controller('ManageStoreController', function($scope, Store, dialogs, $translate) {
        $scope.listStore = {};


        $scope.getStore = function() {
            Store.getStorebyUserId().then(function(respone) {
                $scope.listStore = respone.data;
            }).catch(function() {
                $scope.listStore = {};
            });
        }

        $scope.getStore();
        $scope.deleteStore = function() {
            var dlg = dialogs.confirm('Xác nhận', 'Bạn có muốn xóa cửa hàng này?', { size: 'sm' });
            dlg.result.then(function(btn) {
                $scope.getStore();
                $scope.confirmed = 'You thought this quite awesome!';
            }, function(btn) {
                $scope.confirmed = 'Shame on you for not thinking this is awesome!';
            });
        };
    });