import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IntereseeingsApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DataHandlerProvider } from '../providers/data-handler/data-handler';
import { IonicStorageModule } from '@ionic/storage';
import { AboutPage } from '../pages/about/about';
import { CategoriesPage } from '../pages/categories/categories';
import { CouponsPage } from '../pages/coupons/coupons';
import { FoodPage } from '../pages/food/food';
import { MapPage } from '../pages/map/map';
import { QrCodesPage } from '../pages/qr-codes/qr-codes';
import { StorePage } from '../pages/store/store';


@NgModule({
  declarations: [
    IntereseeingsApp,
    HomePage,
    TabsPage,
    AboutPage,
    CategoriesPage,
    CouponsPage,
    FoodPage,
    MapPage,
    QrCodesPage,
    StorePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(IntereseeingsApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    IntereseeingsApp,
    HomePage,
    TabsPage,
    AboutPage,
    CategoriesPage,
    CouponsPage,
    FoodPage,
    MapPage,
    QrCodesPage,
    StorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataHandlerProvider
  ]
})
export class AppModule { }
