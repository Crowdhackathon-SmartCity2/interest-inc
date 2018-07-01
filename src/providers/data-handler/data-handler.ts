//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
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
  dataObj: object = {
    UUID:"",
    namae:"",
    image:"",
    text:"",
    tags:[]
  };
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
          console.log 
          resolve(this.data[key])
        });
      }
      else{
        resolve(this.data[key])
      }
    });
  
  }


  searchByLocationName(location:string = "default"):Promise<any>{
    return new Promise((val)=> {
      console.log("THIS IS LOCATION: ", location)
      this.getData("places").then((data)=>{
        console.log("THIS IS DATA", data)
        for (var i in data){
          console.log(i)
          console.log("THIS IS LOCATION: ", location)
          var obj = data[i]
          console.log(obj.name,obj.name == location)
          if(obj.name == location){
            console.log("THE IF HAS BEEN BREACHED")
            val(data[i])
            
          }
        }
      });
    })
  }
}

 /* getData = (key:string) => {
    return new Promise((rez)=>{
      this.http.get("assets/data/data.json").subscribe()
      rez(this.data[key])
    });
  }*/