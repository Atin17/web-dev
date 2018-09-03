'use strict';

(function(){

class TheaterComponent {
  constructor($http,socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.theater = [];
    this.socket = socket;
  }
  
  $onInit(){
    this.$http.get('/api/addtheaterendpoints').then(response =>{
      this.Theaters = response.data;
      this.socket.syncUpdates('addtheaterendpoints',this.Theaters);
    });
  }


  addTheater()
  {
    this.$http.post('/api/addtheaterendpoints',{
      Name:this.Name,
      City:this.City,
      Location:this.Location,
    });
    this.Name = ' ';
    this.City = ' ';
    this.Location = ' '; 

    window.alert("Theater added successfully");
  }

  RemoveTheater(Theater){
    this.$http.delete('/api/addtheaterendpoints/' + Theater._-id);
  }

}

angular.module('projectApp')
  .component('theater', {
    templateUrl: 'app/theater/theater.html',
    controller: TheaterComponent,
    controllerAs: 'theaterCtrl'
  });

})();
