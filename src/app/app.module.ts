//Componentes
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { MyApp } from './app.component';

//Providers
import { MovieProvider } from '../providers/movie/movie';
import { ConfigProvider } from '../providers/config/config';
import { AuthProvider } from '../providers/auth/auth';

//Plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

//Páginas do App
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedPage } from '../pages/feed/feed';
import { IntroPage } from '../pages/intro/intro';
import { SobrePage } from '../pages/sobre/sobre';
import { PerfilPage } from '../pages/perfil/perfil';
import { BuscarPage } from '../pages/buscar/buscar';
import { FilmDetalhePage } from '../pages/film-detalhe/film-detalhe';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { WikipediaProvider } from '../providers/wikipedia/wikipedia';

const config = {
  authDomain: "material-geek.firebaseapp.com",
  databaseURL: "https://material-geek.firebaseio.com",
  projectId: "material-geek",
  storageBucket: "material-geek.appspot.com",
  messagingSenderId: "216254889248"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FeedPage,
    IntroPage,
    ConfiguracoesPage,
    PerfilPage,
    SobrePage,
    FilmDetalhePage,
    BuscarPage,
    LoginPage,
    CadastroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FeedPage,
    IntroPage,
    ConfiguracoesPage,
    PerfilPage,
    SobrePage,
    FilmDetalhePage,
    BuscarPage,
    LoginPage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieProvider,
    ConfigProvider,
    AuthProvider,
    WikipediaProvider
  ]
})
export class AppModule { }
