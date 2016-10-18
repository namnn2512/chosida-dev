'use strict';

angular.module('chosidaApp')
    .factory('ManageStore', function ($location, $rootScope, $http, Store, Auth, $cookieStore, $q) {
        var currentUser = Auth.getCurrentUser();

        return {

            createStore: function (store) {
                return Store.insertStore(store);
            },

            getStoresbyUserId: function (callback) {
                var cb = callback || angular.noop;

                return Store.getDataByUserId({ userId: currentUser._id },
                    function (data) {
                        return cb(data);
                    },
                    function (err) {
                        return cb(err);
                    }).$promise;
            }
        };
    });
