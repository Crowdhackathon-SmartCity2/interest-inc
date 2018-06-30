//import { HttpClient } from '@angular/common/http';
import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
/*
  Generated class for the DataHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataHandlerProvider {
  BeaconInRange: boolean = false
  locationName: string = null
  data: any
  constructor(public http: Http) {
    console.log('Hello DataHandlerProvider Provider');
  }
/*
loadData(key:string) {
  return this.http.get("assets/data/data.json")
  .map((rez:Response) => rez.json()[key])
}
*/

getData = (key:string) => { 
    return new Promise((resolve) => {
      if(this.data == undefined){
        this.http.get('assets/data/data.json')
        .subscribe(result => {
          this.data = result.json()
          resolve(this.data[key])
        });
      }
      else{
        resolve(this.data[key])
      }
    });
  
  }


  searchByLocationName(location:string = "default"){
    console.log("THIS IS LOCATION: ", location)
    this.getData("places").then((data)=>{
    console.log("THIS IS DATA", data)
    for (var i in data){
      var obj = data[i]
      if(obj.name == location){
        return obj;
      }
    }
  });
    return this.data[0]
    }
  }

 /* getData = (key:string) => {
    return new Promise((rez)=>{
      this.http.get("assets/data/data.json").subscribe()
      rez(this.data[key])
    });
  }*/