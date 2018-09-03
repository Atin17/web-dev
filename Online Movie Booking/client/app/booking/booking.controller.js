'use strict';

(function(){

class BookingComponent {
  constructor($http, $scope) {
    this.message = 'Hello';
    var seats=[];
    this.$http=$http;
    this.$scope=$scope;
  
  
   $(document).ready(function(){ 
    
      $('.seat').click(function(){
        $(this).toggleClass('seatselected');
        var seatno= $(this).attr('id');
        if($.inArray(seatno, seats)> -1)
        {
          var a = seats.lastIndexOf(seatno);
          seats.splice(a,1);
        }
        else{
          seats.push(seatno);
        $scope.SeatNumbers=seats;

        }
        var seatNum=seats;
        
        var ticket = seats.length;
        var subTotal=ticket*180;
        var baseFare=25*ticket;
        var total =subTotal+baseFare;

        
        $('#seatNumbers').html(seats.sort()+'');
        $('#tickets').html(ticket);
        $('#subtotal').html(subTotal);
        $('#ihc').html(baseFare);
        $('#total').html(total);
       sessionStorage.setItem("ticketNum",ticket);
       sessionStorage.setItem("internetCharges",baseFare);
       sessionStorage.setItem("subAmount",subTotal);
       sessionStorage.setItem("totalAmount",total);
       sessionStorage.setItem("seat",seatNum);
       

      });
    });
  
  
    
  }


  $onInit(){
    this.movieName = sessionStorage.getItem("name");
  }

  

}
 


 
 


angular.module('projectApp')
  .component('booking', {
    templateUrl: 'app/booking/booking.html',
    controller: BookingComponent,
    controllerAs: 'bookingCtrl'
  });

})();
