import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    AuthProvider
  ]
})
export class LoginPage {

  user = {
    email: '',
    senha: ''
  };

  public toast = this.toastControl.create({ duration: 3000, position: 'bottom' });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthProvider,
    private toastControl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  CadPage(){
    this.navCtrl.push(CadastroPage);
  }

  logar() {
    this.authService.Login(this.user)
      .then(() => {
        this.toast.setMessage("Você foi logado!");
        this.navCtrl.setRoot(TabsPage);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

}
