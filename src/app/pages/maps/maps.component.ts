import { Component, OnInit, Input, ViewChild } from '@angular/core';

declare var ol: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {

  constructor() { }

  latitude: number = 0;
  longitude: number = 0;
  map: any;

  @ViewChild('map', {static: true}) mapDiv;

  @Input() set coord(latlong: string){
    const coords: Array<string> = latlong.split(',');
    this.latitude = parseFloat(coords[0]);
    this.longitude = parseFloat(coords[1]);
    this.map = null;
    // Just remove map element content... to prevent duplicate
    this.mapDiv.nativeElement.innerHTML = '';
    this._defineMap();
  }



  private _defineMap() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 8
      })
    });

  }
}
