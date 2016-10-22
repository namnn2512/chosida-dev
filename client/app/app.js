'use strict';

angular.module('chosidaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'ngFileUpload',
  'smart-table',
  'dialogs.main',
  'pascalprecht.translate',
  'dialogs.default-translations'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $translateProvider) {
    $urlRouterProvider
      .otherwise('/');
      
      
    // $translateProvider.translations('VN',{
	// 		DIALOGS_ERROR: "Error",
	// 		DIALOGS_ERROR_MSG: "Se ha producido un error desconocido.",
	// 		DIALOGS_CLOSE: "Cerca",
	// 		DIALOGS_PLEASE_WAIT: "Espere por favor",
	// 		DIALOGS_PLEASE_WAIT_ELIPS: "Espere por favor...",
	// 		DIALOGS_PLEASE_WAIT_MSG: "Esperando en la operacion para completar.",
	// 		DIALOGS_PERCENT_COMPLETE: "% Completado",
	// 		DIALOGS_NOTIFICATION: "Notificacion",
	// 		DIALOGS_NOTIFICATION_MSG: "Notificacion de aplicacion Desconocido.",
	// 		DIALOGS_CONFIRMATION: "Confirmacion",
	// 		DIALOGS_CONFIRMATION_MSG: "Se requiere confirmacion.",
	// 		DIALOGS_OK: "Bueno",
	// 		DIALOGS_YES: "Si",
	// 		DIALOGS_NO: "No"
	// 	});
          
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.preferredLanguage('en-US');
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          event.preventDefault();
          $location.path('/login');
        }
      });
    });
  });
