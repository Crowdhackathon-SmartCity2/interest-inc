import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrProvider } from '../../providers/qr/qr';

/**
 * Generated class for the QrCodesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-codes',
  templateUrl: 'qr-codes.html',
})
export class QrCodesPage {

  constructor(
    public navCtrl: NavController, public qr: QrProvider) {
    console.log('ionViewDidLoad QrCodesPage');
  }
  ionViewDidLoad(){

    }
}
