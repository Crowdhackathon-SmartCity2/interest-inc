import { DataHandlerProvider } from './../../providers/data-handler/data-handler';
import { Component, ViewChild, ElementRef } from '@angular/core';

import { Platform } from 'ionic-angular';

import { Slides } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

//import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  places: any;
  map: any;
  queryText: string;
  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(
    public data: DataHandlerProvider,
    public platform: Platform,
    public geo: Geolocation) {
      platform.ready().then(()=>{
        this.loadMap()
      })
  }

  loadMap() {
    this.data.getData('places').then((mapData:any) => {
      this.places = mapData
      var posOption = {timeout:10000, enableHighAccuracy: false}
      this.geo.getCurrentPosition(posOption)
    .then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
       this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 15,
        center: latLng
      });
    }).catch(()=>{
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 15,
        center: {lat: 41.85, lng: -87.65}
        
      });
    });

      mapData.forEach((markerData: any) => {
        let infoWindow = new google.maps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`
        });

        let marker = new google.maps.Marker({
          position: markerData.position,
          title: markerData.name
        });

        marker.addListener('click', () => {
          infoWindow.open(this.map, marker);
        });
      });
    });

}
/*
  chosenCity = [
    {
      cityName: "Athens"
    }
  ]

  region = [
    {
      regionName: "Monastiraki"
    },
    {
      regionName: "Melissia"
    }
  ]
*/  

  slider = [

      {
        name:"Athens(1)",
        image:"assets/img/athens/athens1.jpg"
      },
      {
        name:"Athens(2)",
        image:"assets/img/athens/athens2.jpg"
      },
      {
        name:"Athens(3)",
        image:"assets/img/athens/athens3.jpg"
      },
      {
        name:"Athens(4)",
        image:"assets/img/athens/athens4.jpg"
      },
      {
        name:"Athens(5)",
        image:"assets/img/athens/athens5.jpg"
      },
      {
        name:"Athens(6)",
        image:"assets/img/athens/athens6.jpg"
      },
      {
        name:"Athens(7)",
        image:"assets/img/athens/athens7.jpg"
      },

  ]
  
  numbers=[1,2,3,]
  @ViewChild(Slides) slides: Slides;

  goToSlide(){
    this.slides.slideTo(2.500);
}


updateMainSearch(){

}
}


