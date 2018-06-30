import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
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
    public data: DataHandlerProvider,
    public httpClient: HttpClient) {
  }
  
  ionViewCanEnter(){
    this.load()
  }

  goToPlaces(){

  }

  load(){

    console.log("THE END IS HERE")
    this.data.loadData("categories").subscribe((data) => {
      console.log(data)
      this.categories = data
    })
  }

}
