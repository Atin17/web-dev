'use strict';

(function(){

class MovieComponent {
  constructor($http, socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.socket = socket;
    var MovieData =[];
    
  }
  $onInit(){
    this.$http.get('/api/movieendpoints').then(response =>{
      this.Movies = response.data;
      this.socket.syncUpdates('movieendpoints',this.Movies);
    });
  }
  

  findMovie(){
    this.$http.get('http://www.omdbapi.com/?apikey=80a44329&t='+this.movieName+'&y='+this.Year).then(
      response=>
      {
        this.MovieData = response.data;
        
      }
    );
  }
  addMovie()
  {
    this.$http.post('/api/movieendpoints',{
      Title: this.MovieData.Title,
      Year: this.MovieData.Year,
      Genre: this.MovieData.Genre,
      Runtime: this.MovieData.Runtime,
      Actors: this.MovieData.Actors,
      Poster: this.MovieData.Poster,
      Status: false
  
    });
    

    window.alert("Movie added successfully");
  }

  RemoveMovie(movieendpoints){
    this.$http.delete('/api/movieendpoints/' + movieendpoints._id);
  }
}

angular.module('projectApp')
  .component('movie', {
    templateUrl: 'app/movie/movie.html',
    controller: MovieComponent,
    controllerAs: 'movieCtrl'
  });

})();
