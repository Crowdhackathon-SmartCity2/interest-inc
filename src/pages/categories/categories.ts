import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { ReligionPage } from '../religion/religion';
import { FoodPage } from '../food/food';
import { EntertainmentPage } from '../entertainment/entertainment';


/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  moveToHistoryTab(){
    this.navCtrl.push(HistoryPage);
  }

  moveToReligionTab(){
    this.navCtrl.push(ReligionPage);
  }
  moveToFoodTab(){
    this.navCtrl.push(FoodPage);
  }
  moveToEntertainmentTab(){
    this.navCtrl.push(EntertainmentPage);
  }

}
