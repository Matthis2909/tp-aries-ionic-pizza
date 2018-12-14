import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PizzaProvider } from '../providers/pizza/pizza';
import {HttpClientModule} from "@angular/common/http";
import {DetailPizzaPage} from "../pages/detail-pizza/detail-pizza";
import {LocalisationPage} from "../pages/localisation/localisation";
import {GoogleMaps} from "@ionic-native/google-maps";
import {Geolocation} from "@ionic-native/geolocation";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPizzaPage,
    LocalisationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPizzaPage,
    LocalisationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaProvider,
    GoogleMaps,
    Geolocation
  ]
})
export class AppModule {}
