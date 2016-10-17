'use strict';

angular.module('chosidaApp')
  .controller('NavbarComponent', function($state, $scope, Auth, $location, $window) {
    init();
    function init() {
      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.isAdmin = Auth.isAdmin;
      $scope.getCurrentUser = Auth.getCurrentUser;
      $scope.isCollapsed = true;  
    }
    $scope.user = {};
    $scope.errors = {};
    $scope.menu = [{
      "title": "Home",
      "state": "main"
    }, {
      "title": "About",
      "state": "main"
    }, {
      "title": "Service",
      "state": "main"
    }];

    $scope.login = function(form) {
      $scope.submitted = true;
      if (form.$valid) {
        Auth.login({
            email: $scope.user.email,
            password: $scope.user.password
          })
          .then(function() {
            // Logged in, redirect to home
            $location.path('/');
          })
          .catch(function(err) {
            $scope.errors.other = err.message;
          });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });

angular.module('chosidaApp')
  .component('navbar', {
    templateUrl: 'components/navbar/navbar.html',
    controller: 'NavbarComponent'
  });
