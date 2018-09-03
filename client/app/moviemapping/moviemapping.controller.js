'use strict';

(function(){

class MoviemappingComponent {
  constructor($http,socket,$scope) {
    this.message = 'Hello';
    this.$http = $http;
    this.socket = socket;
    this.$scope = $scope;
    this.Theaters = [];
    this.Movies = [];
    this.mappedmovies = [];

    
    $(document).ready(function () {
      $('#adddate').click(function () {
        var data = ($('#showdt').val());
        $('#resdate').append("<option value='" + data + "'>" + data + "</option>");
      });
    });


    $(document).ready(function () {
      $('#addtime').click(function () {
        var data = ($('#showtm').val());
        $('#restime').append("<option value='" + data + "'>" + data + "</option>");
      });
    });


    $(document).ready(function(){
      $('#addtheater').click(function(){
        var data = ($('#theater').val());
        $('#restheater').append("<option value='"+ data + "'>" + data +"</option>");
      });
    });

  }
  MapMovie()
   {
    
    var rdate = document.getElementById('resdate'), opts = rdate.getElementsByTagName('option'),
    showdate = [];
    for (var i = 0, len = opts.length; i<len; i++)
    {
      showdate.push(opts[i].value);
    }
    var rTime = document.getElementById('restime'), opts = rTime.getElementsByTagName('option'),
      showTimes = [];
    for (var i = 0, len = opts.length; i < len; i++)
     {
      showTimes.push(opts[i].value);
     }
    var rTheater = document.getElementById('restheater'), opts = rTheater.getElementsByTagName('option'),
      showTheaters = [];
    for (var i = 0, len = opts.length; i < len; i++) 
    {
      showTheaters.push(opts[i].value);
    }
    this.$http.post('/api/moviemappingendpoints', {
      Title: this.movies,
      Poster: this.Poster,
      City: this.city,
      Theaters: showTheaters,
      showdate: showdate,
      showtime: showTimes
    });
    window.alert("Movie Mapped");
    this.movies=' ';
    this.city=' ';
    this.showtm=' ';
    this.showdt=' ';
    this.theater=' ';
  }

  $onInit(){
    this.$http.get('/api/movieendpoints').then(response =>{
      this.Movies = response.data;
      this.socket.syncUpdates('movieendpoints',this.Movies);
    });
    
      this.$http.get('/api/addtheaterendpoints').then(response =>{
        this.Theaters = response.data;
        this.socket.syncUpdates('addtheaterendpoints',this.Theaters);
      });
      
        this.$http.get('/api/moviemappingendpoints').then(response =>{
          this.mappedmovies = response.data;
          this.socket.syncUpdates('moviemappingendpoints',this.mappedmovies);
        });
  
    }

    delmovie(mappedmovies)
    {
      this.$http.delete('/api/moviemappingendpoints/' + mappedmovies._id);
    }

}

angular.module('projectApp')
  .component('moviemapping', {
    templateUrl: 'app/moviemapping/moviemapping.html',
    controller: MoviemappingComponent,
    controllerAs: 'moviemappingCtrl'
  });

})();
