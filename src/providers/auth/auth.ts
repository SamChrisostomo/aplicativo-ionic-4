import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { User } from './user';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()
export class AuthProvider {

  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
  }

  CreateAccount(user: User){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
  }

  Login(user: User){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.senha);
  }

  LogOut(){
    return this.angularFireAuth.auth.signOut();
  }
}
