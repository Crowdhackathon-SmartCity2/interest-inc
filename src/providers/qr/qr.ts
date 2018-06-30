import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/Vibration;
import { DataHandlerProvider } from '../data-handler/data-handler';

/*
  Generated class for the QrProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrProvider {

  constructor(public dataHandler:DataHandlerProvider, public barcodeScanner: BarcodeScanner,public http: HttpClient,public navCtrl: NavController,public vibration: Vibration,public alertCtrl: AlertController) {
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
        this.navCtrl.push(PlacesPage); // TO BE ADDED 
     }).catch(err => {
        //console.log('Error', err);
        const alert = this.alertCtrl.create({
          title:"Error",
          subTitle: err ,
          buttons: ['Ok']
        })
        alert.present();
     });
  }

}
