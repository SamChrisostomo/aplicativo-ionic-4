import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
  providers: [
    MovieProvider,
  ]
})
export class BuscarPage {

  public listaFilmes = new Array<any>();

  texto = {
    conteudo: '',
  };

  public loader;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {

  }

  ionViewDidLoad() {

  }

  openLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }

  closeLoading (){
    this.loader.dismiss();
  }

  buscarFilmes() {
    this.openLoading();
    let title = this.texto.conteudo;

    this.movieProvider.http.get(`
    https://api.themoviedb.org/3/search/movie?api_key=be9d661090ece698142093347f53b7ed&language=en-US&query=${title}&page=1&include_adult=false`).subscribe(
      data => {
        const response = (data as any);
        const objResponse = JSON.parse(response._body);
        this.listaFilmes = objResponse.results;
        this.closeLoading();
      },
      error => {
        console.log(error);
        this.closeLoading();
      }
      );
  }
}
