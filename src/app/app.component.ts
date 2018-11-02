import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ConfigProvider } from '../providers/config/config';
import { IntroPage } from '../pages/intro/intro';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    configProvider: ConfigProvider,
    userObs: AngularFireAuth
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = configProvider.getLocalStorage();
      if (config == null) {
        this.rootPage = IntroPage;
        configProvider.setLocalStorage(false);
      }

      const loginObs = userObs.authState.subscribe(
        user => {
          if(user){
            this.rootPage = TabsPage;
            loginObs.unsubscribe();
          }else{
            this.rootPage = LoginPage;
            loginObs.unsubscribe();
          }
        }
      );

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
