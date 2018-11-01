import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseUrl = "https://api.themoviedb.org/3";
  private apiKey = "be9d661090ece698142093347f53b7ed";

  constructor(public http: Http) {
    
  }

  getLatestMovies(page = 1){
    return this.http.get(this.baseUrl + `/movie/popular?page=${page}&api_key=` + this.apiKey);
  }

  getFilmDetail(filmeId){
    return this.http.get(this.baseUrl + `/movie/${filmeId}?api_key=` + this.apiKey);
  }

}
