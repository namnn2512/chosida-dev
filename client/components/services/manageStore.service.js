'use strict';

angular.module('chosidaApp')
    .factory('ManageStore', function Auth($location, $rootScope, $http, Store, Auth, $cookieStore, $q) {
        var currentUser = Auth.getCurrentUser();

        return {

            createStore: function (store, callback) {
                var cb = callback || angular.noop;

                return Store.save(store,
                    function (data) {
                        return cb(store);
                    },
                    function (err) {
                        return cb(err);
                    }).$promise;
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
