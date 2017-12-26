import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Room } from "../../models/room/room.model";
import { RoomsService } from "./../../services/rooms/rooms.service";
import { ToastService } from "./../../services/toast/toast.service";

@IonicPage()
@Component({
  selector: 'page-edit-room',
  templateUrl: 'edit-room.html',
})
export class EditRoomPage {
  room: Room;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private rooms: RoomsService,
    private toast: ToastService,
  ) {}

  ionViewWillLoad() {
    this.room = this.navParams.get('room');
  }

  saveRoom(room: Room){
    this.rooms.editRoom(room).then(() =>{
      this.toast.show(`${room.titulo} saved!`);
      this.navCtrl.setRoot('RoomsPage');
    });
  }

  removeRoom(room: Room){
    this.rooms.removeRoom(room).then(() =>{
      this.toast.show(`${room.titulo} deleted!`);
      this.navCtrl.setRoot('RoomsPage');
    });
  }

}
