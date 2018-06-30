import { HttpClient } from '@angular/common/http';
import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
/*
  Generated class for the DataHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataHandlerProvider {

  data: any
  constructor(public http: Http) {
    console.log('Hello DataHandlerProvider Provider');
  }

loadData(key:string) {
  return this.http.get("assets/data/data.json")
  .map((rez:Response) => rez.json()[key])
}

  /*load = () => { 
    return new Promise((resolve) => {
        this.http.get('assets/data/data.json')
        .subscribe(result => {
          this.data = result.json()
          resolve("Success!")
          console.log(this.data)
      });
    });
  }*/

  getData = (key:string) => {
    return new Promise((rez)=>{
      while(this.data == undefined){
        setTimeout(function (){

        }, 5000);
      }
      {
      rez(this.data[key])
      }
    });
  }

}
