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
  private apiKey = "?api_key=be9d661090ece698142093347f53b7ed";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(nome: string){
    return this.http.get(this.baseUrl + '/search/multi' + this.apiKey + '&language=pt-BR&query=' + nome +'&page=1&include_adult=false');
  }

}
