import { QrProvider } from './../../providers/qr/qr';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = 'HomePage'
  categoriesRoot = 'CategoriesPage'
  couponsRoot = 'CouponsPage'
  qrCodesRoot = 'QrCodesPage'


  constructor(public navCtrl: NavController, public bs:QrProvider) {}
  smileAtTheCamera(){
    this.bs.scanQR()
  }
}
