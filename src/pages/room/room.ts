import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Room } from "./../../models/room/room.model";
import { Note } from "./../../models/note.model";
import { NoteService } from './../../services/note/note.service';
import { Observable } from "rxjs/Observable";

import { Admin } from "./../../models/admin.model";

/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  notesList$: Observable<Note[]>;
  room: Room;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public notes: NoteService) {

    this.notesList$ = this.notes.getNotes().snapshotChanges().map(
      changes => {
        return changes.map(c =>({
            key: c.payload.key,
            ...c.payload.val(),
        }))
      }
    )
}
  ionViewDidLoad() {
    this.room = this.navParams.get('room');
    console.log('ionViewDidLoad RoomPage');
  }



}
