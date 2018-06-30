import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataHandlerProvider } from '../../providers/data-handler/data-handler';

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
  categories 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public data: DataHandlerProvider) {
  }

  ionViewCanEnter(){
   this.data.load().then((rez) => {
     this.categories = rez
   })
  }

  goToPlaces(){

  }

  

}
