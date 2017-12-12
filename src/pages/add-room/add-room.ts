import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomsService } from "./../../services/rooms/rooms.service";

import { Room } from "../../models/room/room.model";

/**
 * Generated class for the AddRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    private rooms: RoomsService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRoomPage');
  }

  addRoom(room: Room){
    this.rooms.addRoom(room).then(ref => {
      this.navCtrl.setRoot("HomePage", { key: ref.key });
    });
  }
}
