import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film-detalhe',
  templateUrl: 'film-detalhe.html',
  providers: [
    MovieProvider
  ]
})
export class FilmDetalhePage {
  public filme;
  public filmeId;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  ionViewDidEnter() {
    this.filmeId = this.navParams.get("id");
    this.buscarDetalhes();
  }

  buscarDetalhes(){
    this.movieProvider.getFilmDetail(this.filmeId).subscribe(
      data=>{
        let response = (data as any)._body;
        this.filme = JSON.parse(response);
        console.log(this.filme);
      },
      error=>{
        console.log(error);
      }
    );
  }
}
