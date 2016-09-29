angular.module('chosidaApp', [])
.controller('NavbarComponent', function($scope, Auth) {
  $scope.menu = [{
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
  $scope.isLoggedIn =  Auth.isLoggedInSync;
  $scope.isAdmin= Auth.isAdminSync;
  $scope.getCurrentUser= Auth.getCurrentUserSync;
  $scope.isCollapsed = true;
})
.directive('navbar', function() {
  return {
    templateUrl: './navbar.html'
  };
});