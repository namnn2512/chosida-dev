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
        $scope.deleteStore = function(id) {
            var dlg = dialogs.confirm('Xác nhận', 'Bạn có muốn xóa cửa hàng này?', { size: 'sm' });
            dlg.result.then(function(btn) {
                Store.setStoretoInactive(id).then(function(){
                    $scope.getStore();
                }, function(){
                    dialogs.error('Lỗi','Không thể xóa cửa hàng này.');
                })
            }, function(btn) {
                //no event
            });
        };
    });