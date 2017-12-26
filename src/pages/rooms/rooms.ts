import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from "rxjs/Observable";

import { AuthService } from './../../services/authService';
import { RoomsService } from "./../../services/rooms/rooms.service";
import { Room } from "../../models/room/room.model";


@IonicPage()
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html',
})
export class RoomsPage {

  roomsList$: Observable<Room[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private rooms: RoomsService,
    public authService: AuthService,
  ) {
    // lista de la bd; snapshotChanges: key and value
    this.roomsList$ = this.rooms.getRooms().snapshotChanges().map(
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
  }

}
