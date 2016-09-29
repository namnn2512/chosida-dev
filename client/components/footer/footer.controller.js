'use strict';

function FooterComponent(){};
angular.module('chosidaApp')
.component('footer', {
  template: require('./footer.html'),
  controller: FooterComponent
});
