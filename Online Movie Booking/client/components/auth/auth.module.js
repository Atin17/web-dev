'use strict';

angular.module('projectApp.auth', ['projectApp.constants', 'projectApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
