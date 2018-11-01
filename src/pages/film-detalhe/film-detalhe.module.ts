import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmDetalhePage } from './film-detalhe';

@NgModule({
  declarations: [
    FilmDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(FilmDetalhePage),
  ],
})
export class FilmDetalhePageModule {}
