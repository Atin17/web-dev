'use strict';

(function(){

class TicketComponent {
  constructor($http, socket) {
    this.$http = $http;
    this.socket = socket;
   

  }
  $onInit(){
    
    this.$http.get('/api/movieendpoints').then(response =>{
      this.Movies = response.data;
      this.socket.syncUpdates('movieendpoints',this.Movies);
    });

    this.$http.get('/api/paymentendpoints').then(response =>{
      this.Details = response.data;
      this.socket.syncUpdates('movieendpoints',this.Details);
    });
     
    
      this.UName = sessionStorage.getItem("UName");
      this.NOT = sessionStorage.getItem("ticketNum");
      this.total = sessionStorage.getItem("totalAmount");
      this.seatN = sessionStorage.getItem("seat");
      this.movieName = sessionStorage.getItem("name");
      console.log(this.UName);
    
}

}


angular.module('projectApp')
  .component('ticket', {
    templateUrl: 'app/ticket/ticket.html',
    controller: TicketComponent,
    controllerAs: 'ticketCtrl'
  });

})();
