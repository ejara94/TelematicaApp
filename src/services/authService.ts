import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; //Add FirebaseApp

import { User } from "./../models/user"

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  loginWithEmail(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  registerUser(user: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get currentUser(): string {
    return this.afAuth.auth.currentUser ? this.afAuth.auth.currentUser.email:null;
  }
  get currentUser_Id(): string {
    return this.afAuth.auth.currentUser.uid ? this.afAuth.auth.currentUser.uid :null;
  }
}
