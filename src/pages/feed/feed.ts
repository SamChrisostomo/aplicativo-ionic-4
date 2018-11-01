import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmDetalhePage } from '../film-detalhe/film-detalhe';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  //variaveis globais
  public listaFilmes = new Array<any>();
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;
  public page = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
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

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    //Função que carrega os filmes
    this.carregarFilme();
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilme(true);
  }

  ionViewDidEnter() {
    this.carregarFilme();
  }

  carregarFilme(newpage: boolean = false){
    this.openLoading();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        const objReturn = JSON.parse(response._body);
        if(newpage){
          this.listaFilmes = this.listaFilmes.concat(objReturn.results);
          this.infiniteScroll.complete();
        }else{
          this.listaFilmes = objReturn.results;
        }
        
        //Funções de Loading e Refresh
        this.closeLoading();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      },
      error => {
        console.log(error);
        this.closeLoading();
      }
    );
  }

  filmeDetalhes(filme){
    this.navCtrl.push(FilmDetalhePage, { id: filme.id});
  }
}
