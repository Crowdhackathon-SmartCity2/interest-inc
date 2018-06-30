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
import { AccountPage } from '../pages/account/account';

import { Geolocation } from '@ionic-native/geolocation';
import { QrProvider } from '../providers/qr/qr';
import { BeaconProvider } from '../providers/beacon/beacon';

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
    StorePage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(IntereseeingsApp, {}, {
      links:[
        { component: TabsPage, name: 'TabsPage', segment: 'page-tabs' },
        { component: HomePage, name: 'HomePage', segment: 'home' },
        { component: AboutPage, name: 'AboutPage', segment: 'about' },
        { component: CategoriesPage, name: 'CategoriesPage', segment: 'categories' },
        { component: FoodPage, name: 'FoodPage', segment: 'food' },
        { component: MapPage, name: 'MapPage', segment: 'map' },
        { component: QrCodesPage, name: 'QrCodesPage', segment: 'qr-codes' },
        { component: StorePage, name: 'StorePage', segment: 'store' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: CouponsPage, name: 'CouponsPage', segment: 'coupons' }
      ]
    }),
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
    StorePage,
    AccountPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataHandlerProvider,
    QrProvider,
    BeaconProvider
  ]
})
export class AppModule { }
