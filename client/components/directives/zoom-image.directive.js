(function() {
  'use strict';

  angular
    .module('chosidaApp')
    .directive('zoomImage', zoomImage);

  /** @ngInject */
  function zoomImage() {
    function link(scope, element, attrs) {
      scope.$watch('data', function(data) {
        var img = angular.element(element);

        resize();
        function resize() {
          if (scope.data) {
            attrs.$set('data', scope.data);
            var width = window.innerWidth;
            if (width > 768) {
              img.elevateZoom({responsive: true, zoomWindowPosition: 11});
            } else {
              var ew = element[0].offsetWidth;
              img.elevateZoom({zoomType: 'lens', lensShape: 'square', lensSize: ew/3});
            }
          } else {
            $('.zoomContainer').remove();
            img.removeData('elevateZoom');
            img.removeData('zoomImage');
          }
        }
        window.onresize = resize;

      });
    }

    return {
      restrict: 'A',
      scope: {
        data: '@'
      },
      link: link
    }

  }

})();
