import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Note } from "./../../models/note.model";

@Injectable()
export class NoteService {

  private noteRef = this.db.list<Note>("publicaciones");

  constructor(private db: AngularFireDatabase){}

  getNotes(){
    return this.noteRef;
  }

  addNote(note: Note){
    return this.noteRef.push(note);
  }

  editNote(note: Note){
    return this.noteRef.update(note.key, note);
  }
  removeNote(note: Note){
    return this.noteRef.remove(note.key);
  }

}
