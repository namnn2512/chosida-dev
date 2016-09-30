'use strict';

angular.module('chosidaApp')
  .controller('NavbarComponent',function (Auth){
    var self = this;
    self.menu = [{
        'title': 'Home',
        'state': 'main'
    },
    {
        'title': 'About',
        'state': 'main'
    },
    {
        'title': 'Service',
        'state': 'main'
    }];
     self.isLoggedIn =  Auth.isLoggedIn;
    self.isAdmin= Auth.isAdmin;
    self.getCurrentUser= Auth.getCurrentUser;
    self.isCollapsed = true;
});

angular.module('chosidaApp')
.component('navbar', {
  templateUrl: 'components/navbar/navbar.html',
  controller: 'NavbarComponent'
});
