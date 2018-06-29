import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

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
  load = () => { 
    return new Promise((resolve, reject) => {
        this.http.get('assets/data/data.json')
        .subscribe(result => {
          this.data = result.json()
          resolve("Success!")
          console.log(this.data)
      });
    });
  }

  getData = (key) => {
    return new Promise((rez)=>{
      if(this.data == undefined){
        this.load().then(() => {
          rez(this.data[key])
        })
      }
      else{
      rez(this.data)
      }
    });
  }

}
