'use strict';

angular.module('chosidaApp')
    .service('MenuService', function($cacheFactory, $http, $q) {

        var cache = $cacheFactory('dataCache');

        function success(data, status, headers, config) {
            // some success thing
        }

        function error(data, stats, headers, config) {
            // some error thing
        }

        this.getMenu = function() {
            var deferred = $q.defer();
            var cacheId = 'menuCategory';
            var cachedData = cache.get(cacheId);
            // Return the data if we already have it
            if (cachedData) {
                //success(cachedData);
                deferred.resolve(cachedData);
                return deferred.promise;
            }


            $http.get('/menu').then(function(response) {
                //self.menu = response.data;
                cache.put(cacheId, response.data);
                deferred.resolve(response.data);

                //success(data, status, headers, configs);
            },
                function(response) {
                    //error callback
                });
            return deferred.promise;
        };

    })

    .controller('LeftbarController', function(MenuService) {
        var self = this;
        MenuService.getMenu().then(function(menu) {
            self.menu = menu;
        });
    });

angular.module('chosidaApp')
    .component('leftShop', {
        templateUrl: 'components/leftbar/leftbar.html',
        controller: 'LeftbarController',
        controllerAs: 'leftbar'
    });
