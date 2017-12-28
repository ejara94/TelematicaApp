import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Room } from "../../models/room/room.model";
import { RoomsService } from "./../../services/rooms/rooms.service";

import { ToastService } from "./../../services/toast/toast.service";


@IonicPage()
@Component({
  selector: 'page-add-room',
  templateUrl: 'add-room.html',
})
export class AddRoomPage {

  room = {} as Room;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private rooms: RoomsService,
    private toast: ToastService,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRoomPage');
  }

  addRoom(room: Room){
    this.rooms.addRoom(room).then(ref => {
      this.toast.show(`${room.titulo} added!`);
      this.navCtrl.setRoot("HomePage");
    });
  }

}
