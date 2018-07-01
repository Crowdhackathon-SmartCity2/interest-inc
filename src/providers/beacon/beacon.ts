import { PlacesPage } from './../../pages/places/places';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBeacon } from '@ionic-native/ibeacon';
import { Vibration } from '@ionic-native/Vibration';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AlertController, Events } from 'ionic-angular';
import { DataHandlerProvider } from '../data-handler/data-handler';
import { cordovaWarn, Cordova } from '@ionic-native/core';

/*
  Generated class for the BeaconProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeaconProvider {

  constructor(public dataHandler:DataHandlerProvider,
    public http: HttpClient,
    public ibeacon: IBeacon,
    private localNotifications: LocalNotifications,
    public vibration: Vibration,
    public alertCtrl: AlertController,
    private backgroundMode: BackgroundMode,
    private events: Events) {
    console.log('Hello BeaconProvider Provider');
  }

  BeaconScan(){
    console.log("BEACON IS SCANNING, HOIPE")
    this.backgroundMode.enable();
    var delegate = this.ibeacon.Delegate();
    this.ibeacon.setDelegate(delegate);
delegate.didStartMonitoringForRegion()
  .subscribe(
    data => {console.log('didStartMonitoringForRegion: ', data)},
    error => console.error()
    
  );
delegate.didEnterRegion()
  .subscribe(
    data => {
      this.dataHandler.BeaconInRange=true;
      this.dataHandler.locationName=data.region.identifier;
      //this.navCtrl.push(PlacesPage); // TO BE ADDED
      this.events.publish("locationFound")

      this.localNotifications.schedule({
        id: 1,
        text: 'Hey! Looks like you are near:'+ data.region.identifier,
        led: true,
        vibrate: true,
        launch: true,
        wakeup: true
      });
    }
  );
    if(!this.ibeacon.isBluetoothEnabled()){
      this.ibeacon.enableBluetooth();
    }
    let beaconRegion = this.ibeacon.BeaconRegion("Stavros Niarchos Foundation Cultural Centre", "00000000-0000-0000-0000-000000000001", 10065, 26049, true);
    this.ibeacon.startMonitoringForRegion(beaconRegion)
  }
  }



