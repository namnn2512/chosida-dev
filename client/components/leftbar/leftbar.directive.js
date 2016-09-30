(function() {
  'use strict';

  angular
    .module('chosidaApp')
    .directive('leftShop', leftShop);

  /** @ngInject */
  function leftShop() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/leftbar/leftbar.html',
      scope: {
          creationDate: '='
      },
      controller: LeftbarController,
      controllerAs: 'leftbar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function LeftbarController($http) {
      var vm = this;
      $http.get('components/utils/menu.json').then(function(response) {
        vm.menu = response.data;
        console.log(vm.menu);
      });

    }
  }

})();
