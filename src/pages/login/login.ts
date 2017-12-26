import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
  LoadingController, AlertController } from 'ionic-angular';

import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../../services/authService';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    //limpiar usuario registrado
    this.afAuth.auth.signOut();
  }

  async login(user: User) {
    let loading = this.loadingCtrl.create({
      content: 'Verificando. Por favor, espere...'
    });
    loading.present();

    this.authService.loginWithEmail(user).then(result => {
      loading.dismiss();
      this.navCtrl.setRoot('HomePage');
    }).catch(error => {
      loading.dismiss();
      this.alert('Error', error.message);
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

    /*
    try{
    //autenticacion con firebase
      const result = this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password);
      console.log(result);/*
      if(result){
        this.navCtrl.setRoot('HomePage');
      }
    }catch(e){
    console.error(e);
    }
    */

  register() {
    this.navCtrl.push('RegisterPage'); //te lleva a la página de registro
  }
}
