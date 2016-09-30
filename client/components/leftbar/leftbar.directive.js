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
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function LeftbarController() {
      //var vm = this;
    }
  }

})();
