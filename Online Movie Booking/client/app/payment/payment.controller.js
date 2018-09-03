'use strict';

(function(){

class PaymentComponent {
  constructor($http, socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.socket = socket;
    
    $(document).ready(function(){ 
    
       
        
      $('#UName').html(this.Name);

       sessionStorage.setItem("Uname",this.Name);
      
       

      });
      console.log(this.Name);


  }
  $onInit(){
    this.NOT = sessionStorage.getItem("ticketNum");
    this.total = sessionStorage.getItem("totalAmount");
    this.seatN = sessionStorage.getItem("seat");
    this.movieName = sessionStorage.getItem("name");

  }
  payment()
  {
    this.$http.post('/api/paymentendpoints',{
      Name: this.Name,
      Contact: this.Contact,
      movieName: this.movieName,
      NOT: this.NOT,
      seatN: this.seatN,
      total: this.total
  });
}


}

angular.module('projectApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });

})();
