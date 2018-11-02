import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public toast = this.toastControl.create({ duration: 3000, position: 'bottom' });

  constructor(
    public navCtrl: NavController,
    private toastControl: ToastController,
    private authService: AuthProvider) {
  }

  sair() {
    this.authService.LogOut()
      .then(() => {
        this.toast.setMessage("Até a próxima!");
        this.navCtrl.push(LoginPage);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
