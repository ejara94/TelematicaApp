import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from "angularfire2/auth";
import { AngularFireDatabaseModule} from "angularfire2/database";

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { FIREBASE_CONFIG } from './app.firebase.config';

import { RoomsService } from "./../services/rooms/rooms.service";

@NgModule({
  declarations: [
    MyApp,
//    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
//    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoomsService
  ]
})
export class AppModule {}
