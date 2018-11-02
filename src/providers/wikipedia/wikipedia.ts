import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the WikipediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WikipediaProvider {

  //private dUrl = "https://pt.wikipedia.org/w/api.php?action=opensearch&search=os%20vingadores&format=xml&%20";

  constructor(public http: Http) {
    console.log('Hello WikipediaProvider Provider');
  }

}
