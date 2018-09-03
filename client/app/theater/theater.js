'use strict';

angular.module('projectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/theater', {
        template: '<theater></theater>'
      });
  });
