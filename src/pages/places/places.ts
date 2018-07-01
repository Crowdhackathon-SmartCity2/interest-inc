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
  dataObj = {
    UUID:"",
    namae:"",
    image:"",
    text:"",
    tags:[]
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataHandler: DataHandlerProvider
  ) {
    if(this.dataHandler.BeaconInRange){
      this.dataHandler.searchByLocationName(this.dataHandler.locationName).then((rez)=>{
        this.dataObj = rez
      })
      console.log("THis is the new dataobj: ",this.dataObj)
      this.dataHandler.BeaconInRange = false
    }
    console.log('ionViewDidLoad PlacesPage');
  }

  ionViewCanEnter(){

  }

}
