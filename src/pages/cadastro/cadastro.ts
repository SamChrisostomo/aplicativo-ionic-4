import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  providers:[
    AuthProvider
  ]
})
export class CadastroPage {

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
    console.log('ionViewDidLoad CadastroPage');
  }

  criarConta() {
    this.authService.CreateAccount(this.user)
      .then((user: any) => {
        user.sendEmailVerification();

        this.toast.setMessage("Parabéns, sua conta foi criada");
        this.toast.present();

        this.navCtrl.setRoot(TabsPage);
      })
      .catch((error: any) => {
        if (error.code == "auth/email-already-in-use") {
          this.toast.setMessage("Este email já está em uso!");
        } else if (error.code == "auth/invalid-email") {
          this.toast.setMessage("Digite um email válido!");
        } else if (error.code == "auth/operation-not-allowed") {
          this.toast.setMessage("Serviço não autorizado!");
        } else if (error.code == "auth/weak-password") {
          this.toast.setMessage("Senha muito fraca!");
        }
        this.toast.present();
      });
  }
}
