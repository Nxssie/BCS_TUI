import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit  {

  private map: any;
  private lat: number = 27.9247;
  private lng: number = -15.5745;
  private center: L.LatLngExpression = [ 27.9247, -15.5745 ];

  constructor() {}

  private initMap(): void {
    this.map = L.map('map', {
      center: this.center,
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    var circle = L.circle([this.lat, this.lng], {
      color: '#ba000d',
      fillColor: '#ff7961',
      fillOpacity: 0.5,
      radius: 500
  }).addTo(this.map);


  let genome = "Tortilla";
  circle.bindPopup("Genome: <br/>" + genome);

  }

  ngOnInit(): void {
    this.initMap();
  }

  getMap(): L.Map {
    return this.map;
  }

  setMap(newMap: L.Map) {
    this.map = newMap;
  } 

  getLat(): number {
    return this.lat
  }

  setLat(lat: number) {
    this.lat = lat;
  }

  getLng(): number {
    return this.lng
  }
  
  setLng(lng: number) {
    this.lng = lng;
  }

  getCenter(): L.LatLngExpression {
    return this.center;
  }

  setCenter(center: L.LatLngExpression) {
    this.center = center;
  }

}
