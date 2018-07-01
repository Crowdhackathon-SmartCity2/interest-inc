import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { IBeacon } from '@ionic-native/ibeacon';
import { Vibration } from '@ionic-native/Vibration';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PlacesPage } from './../pages/places/places';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IntereseeingsApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DataHandlerProvider } from '../providers/data-handler/data-handler';
import { IonicStorageModule } from '@ionic/storage';
import { AboutPage } from '../pages/about/about';
import { CategoriesPage } from '../pages/categories/categories';

import { HistoryPage } from '../pages/history/history';
import { FoodPage } from '../pages/food/food';
import { ReligionPage } from '../pages/religion/religion';
import { EntertainmentPage } from '../pages/entertainment/entertainment';


import { CouponsPage } from '../pages/coupons/coupons';
import { MapPage } from '../pages/map/map';
import { QrCodesPage } from '../pages/qr-codes/qr-codes';
import { StorePage } from '../pages/store/store';
import { AccountPage } from '../pages/account/account';

import { Geolocation } from '@ionic-native/geolocation';
import { QrProvider } from '../providers/qr/qr';
import { BeaconProvider } from '../providers/beacon/beacon';
import { SightPage } from '../pages/sight/sight';

@NgModule({
  declarations: [
    IntereseeingsApp,
    HomePage,
    TabsPage,
    AboutPage,
    CategoriesPage,
    HistoryPage,
    FoodPage,
    ReligionPage,
    EntertainmentPage,
    CouponsPage,
    FoodPage,
    MapPage,
    QrCodesPage,
    StorePage,
    AccountPage,
    PlacesPage,
    SightPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
        { component: CouponsPage, name: 'CouponsPage', segment: 'coupons' },
        { component: CouponsPage, name: 'PlacesPage', segment: 'places' }

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
    HistoryPage,
    ReligionPage,
    EntertainmentPage,
    CouponsPage,
    FoodPage,
    MapPage,
    QrCodesPage,
    StorePage,
    AccountPage,
    PlacesPage,
    SightPage
  ],
  providers:[
    BarcodeScanner,
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataHandlerProvider,
    QrProvider,
    BeaconProvider,
    Vibration,
    IBeacon,
    LocalNotifications,
    BackgroundMode
  ]
})
export class AppModule { }
