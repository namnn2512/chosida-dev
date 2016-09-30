'use strict';

angular.module('chosidaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('logout', {
          url: '/logout?referrer',
          referrer: 'main',
          template: '',
          controller: function($state, Auth) {
            var referrer = $state.params.referrer
                          || $state.current.referrer
                          || 'main';
            Auth.logout();
            $state.go(referrer);
          }
        })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });
