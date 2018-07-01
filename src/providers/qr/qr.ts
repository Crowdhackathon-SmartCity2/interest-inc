import { PlacesPage } from './../../pages/places/places';
import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { AlertController, Events } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Vibration } from '@ionic-native/Vibration';
import { DataHandlerProvider } from '../data-handler/data-handler';

/*
  Generated class for the QrProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrProvider {
  name:string = null;
  constructor(
    public dataHandler:DataHandlerProvider,
    public barcodeScanner: BarcodeScanner, 
    public http: HttpClient,
    public vibration: Vibration,
    public alertCtrl: AlertController,
    public events: Events) {

    console.log('Hello QrProvider Provider');

  }

  scanQR(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.vibration.vibrate(1000);
        console.log('Barcode data :',barcodeData)
        const alert = this.alertCtrl.create({
          title:"Error",
          subTitle: barcodeData.text ,
          buttons: ['Ok']
        })
        alert.present();
        this.dataHandler.BeaconInRange=true;
        this.dataHandler.locationName=barcodeData.text;//barcodedata tha einai to onoma tou location px."Stavros Niarchos Constitutional Center"
        this.events.publish("locationFound"); // TO BE ADDED 
     }).catch(err => {
        //console.log('Error', err);
        const alert = this.alertCtrl.create({
          title:"Error",
          subTitle: err ,
          buttons: ['Ok']
        })
        alert.present();
        this.events.publish("QR")
     });
  }

}
