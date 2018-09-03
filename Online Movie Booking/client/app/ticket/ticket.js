'use strict';

angular.module('projectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/ticket', {
        template: '<ticket></ticket>'
      });
  });
