'use strict';

// angular.module('chosidaApp')
//     .factory('Store', function($resource) {
//         return $resource('/api/stores/:id/:controller', {
//             id: '@_id'
//         },
//             {
//                 getDataByUserId: {
//                     method: 'GET',
//                     params: {
//                         id: '@userId',
//                         controller: 'getStoresByUserId'
//                     }
//                 }
//             });
//     });

angular.module('chosidaApp')
    .factory('Store', function($http) {

        var urlBase = '/api/stores';
        var storeFactory = {};

        storeFactory.getAllStore = function(location, categoryId, parentCategoryId, paging) {
            var data = {};
            data.location = location;
            data.categoryId = categoryId;
            data.parentCategoryId = parentCategoryId;
            data.paging = paging;
            return $http.post(urlBase + '/getAllStore', data);
        };

        storeFactory.getStore = function(id) {
            return $http.get(urlBase + '/' + id);
        };

        storeFactory.insertStore = function(store) {
            return $http.post(urlBase, store);
        };

        storeFactory.updateStore = function(store) {
            return $http.put(urlBase + '/' + store._id, store);
        };

        storeFactory.deleteStore = function(id) {
            return $http.delete(urlBase + '/' + id);
        };

        storeFactory.getStorebyUserId = function() {
            return $http.get(urlBase + '/' + 'getStoresByUserId');
        };
        
        storeFactory.setStoretoInactive = function(id) {
            return $http.put(urlBase + '/' + id + '/inactiveStore');
        };

        return storeFactory;
    });
