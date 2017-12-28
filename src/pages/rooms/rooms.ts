import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";

import { AuthService } from './../../services/authService';
import { RoomsService } from "./../../services/rooms/rooms.service";
import { AdminsService } from './../../services/adminsService';
import { Room } from "./../../models/room/room.model";
import { Admin } from "./../../models/admin.model";


@IonicPage()
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html',
})
export class RoomsPage {

  roomsList$: Observable<Room[]>;
  adminsList$: Observable<Admin[]>;
  isAdminInRoom: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private rooms: RoomsService,
    public authService: AuthService,
    public adminsService: AdminsService,
  ) {
    // lista de la bd; snapshotChanges: key and value
    this.roomsList$ = this.rooms.getRooms().snapshotChanges().map(
      changes => {
        console.log(changes);
        return changes.map(c =>({
            key: c.payload.key,
            ...c.payload.val(),
        }))
      }
    )
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
    console.log('ionViewDidLoad RoomsPage');
    this.adminsList$.forEach(list => {
      list.forEach(element =>{
        if(element.uId === this.authService.currentUser_Id){
          this.isAdminInRoom = true;
        }
      });
    });
  }

  isAdmin(){ // eventualmente debe retornar un bool que seria i
    console.log(this.isAdminInRoom);
  }
}
