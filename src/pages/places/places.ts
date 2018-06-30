import { DataHandlerProvider } from './../../providers/data-handler/data-handler';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrProvider } from '../../providers/qr/qr';

/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
  place = {}
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataHandler: DataHandlerProvider
  ) {
  }

  ionViewDidLoad() {
    if(this.dataHandler.BeaconInRange){
      this.place = this.dataHandler.searchByLocationName(this.dataHandler.locationName)
      console.log(this.dataHandler.locationName)
      console.log(this.place)
      this.dataHandler.BeaconInRange = false
    }
    console.log('ionViewDidLoad PlacesPage');
  }

}
