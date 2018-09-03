'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;

     
    }

    $onInit()
{
  this.$http.get('/api/movieendpoints').then(response =>{
    this.Movies = response.data;
    this.socket.syncUpdates('movieendpoints',this.Movies);
  });
  console.log(this.Movies);

      this.$http.get('/api/moviemappingendpoints').then(response =>{
        this.mappedmovies = response.data;
        this.socket.syncUpdates('moviemappingendpoints',this.mappedmovies);
      });

  }

  booking(s)
  {
    this.selmov = s.Title;
    sessionStorage.setItem("name",this.selmov);
  }



   
  }

  angular.module('projectApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'mainCtrl'
    });
})();
