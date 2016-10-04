'use strict';

angular.module('chosidaApp')
    .factory('Store', function ($resource) {
        return $resource('/api/stores/:id/:controller', {
            id: '@_id'
        },
            {
                getDataByUserId: {
                    method: 'GET',
                    params: {
                        id: '@userId',
                        controller: 'getStoresByUserId'
                    }
                }
            });
    });
