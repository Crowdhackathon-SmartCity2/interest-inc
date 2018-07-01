import { Component, ViewChild, ElementRef } from '@angular/core';

import { DataHandlerProvider } from '../../providers/data-handler/data-handler';

import { Platform } from 'ionic-angular';

//import { Slides } from 'ionic-angular';


declare var google: any;


@Component({
  selector: 'map-page',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public confData: DataHandlerProvider, public platform: Platform) {
  }
/*
  ionViewDidLoad() {

      this.confData.getMap().subscribe((mapData: any) => {
        let mapEle = this.mapElement.nativeElement;

        let map = new google.maps.Map(mapEle, {
          center: mapData.find((d: any) => d.center),
          zoom: 16
        });

        mapData.forEach((markerData: any) => {
          let infoWindow = new google.maps.InfoWindow({
            content: `<h5>${markerData.name}</h5>`
          });

          let marker = new google.maps.Marker({
            position: markerData,
            map: map,
            title: markerData.name
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

        google.maps.event.addListenerOnce(map, 'idle', () => {
          mapEle.classList.add('show-map');
        });

      });

  }
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
}
