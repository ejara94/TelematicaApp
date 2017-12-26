import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireAuth } from "angularfire2/auth";
import { MenuController } from 'ionic-angular';
import { AuthService } from './../../services/authService';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    public menuCtrl : MenuController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: `Welcome to Telematica App, ${data.email}`,
          duration: 3000
        }).present();
      }
      else{
        this.toast.create({
          message: `No se pudo acceder a la informacion del usuario`,
          duration: 3000
        }).present();
      }
    });
  }

  verSalas() {
    this.navCtrl.push('RoomsPage'); //te lleva a la página de registro
  }

}
