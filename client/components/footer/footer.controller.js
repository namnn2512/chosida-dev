'use strict';

function FooterComponent(){};
angular.module('chosidaApp')
.component('footer', {
  templateUrl: require('./footer.html'),
  controller: FooterComponent
});
