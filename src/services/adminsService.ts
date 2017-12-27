import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

import { Admin } from "./../models/admin.model";

//import { User } from "./../models/user";

@Injectable()
export class AdminsService {

  public adminsRef = this.db.list<Admin>("admins");
  public admins: Observable<any[]>;

  constructor(private db: AngularFireDatabase){
    this.admins = db.list('admins').valueChanges();
  }

  getAdmins(){
    return this.adminsRef;
  }

/*
  addAdmin(admin: Admin){
    return this.adminsRef.push(admin);
  }
  editAdmin(admin: Admin){
    return this.adminsRef.update(admin.key, admin);
  }
  removeAdmin(admin: Admin){
    return this.adminsRef.remove(admin.key);
  }
*/
}
