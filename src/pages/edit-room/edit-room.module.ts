import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditRoomPage } from './edit-room';

@NgModule({
  declarations: [
    EditRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(EditRoomPage),
  ],
})
export class EditRoomPageModule {}