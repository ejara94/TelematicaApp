import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Room } from "./../../models/room/room.model";

@Injectable()
export class RoomsService {

  private roomsRef = this.db.list<Room>("rooms");

  constructor(private db: AngularFireDatabase){}

  getRooms(){
    return this.roomsRef;
  }

  addRoom(room: Room){
    return this.roomsRef.push(room);
  }

}
