import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import { MenuController } from 'ionic-angular';

import { Admin } from './../../models/admin.model';
import { AuthService } from './../../services/authService';
import { AdminsService } from './../../services/adminsService';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  adminsList$: Observable<Admin[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    public menuCtrl : MenuController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public adminsService: AdminsService,
  ) {
    // lista de admins en la bd
    this.adminsList$ = this.adminsService.getAdmins().snapshotChanges().map(
      changes => {
        return changes.map(c =>({
            key: c.payload.key,
            ...c.payload.val(),
        }))
      }
    )
  }

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
