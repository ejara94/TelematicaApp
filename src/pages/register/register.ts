import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';

import { User } from "./../../models/user";
import { AuthService } from './../../services/authService';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authService: AuthService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User){
    let loading = this.loadingCtrl.create({
      content: 'Creando cuenta. Por favor, espere...'
    });
    loading.present();

    this.authService.registerUser(user).then(result => {
      loading.dismiss();
      this.navCtrl.push('LoginPage');
    }).catch(error => {
      loading.dismiss();
      this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
    });
  }

  alert(title: string, message: string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
