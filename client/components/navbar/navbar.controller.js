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
        'state': 'contact'
    },
    {
        'title': 'Service',
        'state': 'service'
    }];
    self.isLoggedIn =  Auth.isLoggedInSync;
    self.isAdmin= Auth.isAdminSync;
    self.getCurrentUser= Auth.getCurrentUserSync;
    self.isCollapsed = true;
});

angular.module('chosidaApp')
.component('navbar', {
  templateUrl: 'components/navbar/navbar.html',
  controller: 'NavbarComponent'
});
