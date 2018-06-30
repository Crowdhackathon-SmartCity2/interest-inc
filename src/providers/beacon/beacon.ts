import { PlacesPage } from './../../pages/places/places';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBeacon } from '@ionic-native/ibeacon';
import { Vibration } from '@ionic-native/Vibration';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular'
import { DataHandlerProvider } from '../data-handler/data-handler';

/*
  Generated class for the BeaconProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeaconProvider {

  constructor(public dataHandler:DataHandlerProvider,public http: HttpClient,public ibeacon: IBeacon,private localNotifications: LocalNotifications,public navCtrl: NavController,public vibration: Vibration,public alertCtrl: AlertController,private backgroundMode: BackgroundMode) {
    console.log('Hello BeaconProvider Provider');
  }

  BeaconScan(){
    this.backgroundMode.enable();
    let delegate = this.ibeacon.Delegate();
    delegate.didRangeBeaconsInRegion()
  .subscribe(
    data => {console.log('didRangeBeaconsInRegion: ', data);
    const alert = this.alertCtrl.create({
      title: 'Nearby:',
      subTitle: 'didRangeBeaconsInRegion: '+ data.region.identifier,
      buttons: ['OK']
    });
    alert.present();
    },
    error => console.error()
  );
delegate.didStartMonitoringForRegion()
  .subscribe(
    data => {console.log('didStartMonitoringForRegion: ', data);
    const alert = this.alertCtrl.create({
      title: 'Nearby:',
      subTitle: 'You will be alerted when you are near:'+ data.region.identifier,
      buttons: ['OK']
    });
    alert.present();
   },
    error => console.error()
    
  );
delegate.didEnterRegion()
  .subscribe(
    data => {
      this.dataHandler.BeaconInRange=true;
      this.dataHandler.locationName=data.region.identifier;
      this.navCtrl.push(PlacesPage); // TO BE ADDED 

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
  delegate.didExitRegion()
  .subscribe(
    data => {const alert = this.alertCtrl.create({
      title: 'Nearby:',
      subTitle: "Pitty..you are now too far away from:" + data.region.identifier,
      buttons: ['OK']
    });
    alert.present();
  }

  );
    if(!this.ibeacon.isBluetoothEnabled()){
      this.ibeacon.enableBluetooth();
    }
    let beaconRegion = this.ibeacon.BeaconRegion("Stavros Niarchos Foundation Cultural Centre", "00000000-0000-0000-0000-000000000001", 10065, 26049, true);
    this.ibeacon.startMonitoringForRegion(beaconRegion)
  }
  }



