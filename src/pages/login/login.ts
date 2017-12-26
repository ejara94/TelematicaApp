import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
  LoadingController, Loading, AlertController } from 'ionic-angular';

import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  public loading:Loading;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    //limpiar usuario registrado
    this.afAuth.auth.signOut();
  }

  async login(user: User) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
      console.log("User logging");
      this.navCtrl.setRoot('HomePage');
    }, (err) => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: err.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();

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
  }

  register() {
    this.navCtrl.push('RegisterPage'); //te lleva a la página de registro
  }

}
