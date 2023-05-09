import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map:any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  // addCountriesLayer() {
  //   // Chargez les données des pays à partir d'un fichier JSON
  //   const countriesData = require('./countries.geojson');

  //   L.geoJSON(countriesData, {
  //     style: { color: 'blue' }, // Style des pays
  //     onEachFeature: (feature, layer) => {
  //       layer.on('click', (event) => {
  //         const countryName = feature.properties.name; // Récupération du nom du pays
  //         console.log('Pays cliqué:', countryName);
  //         // Faites ce que vous souhaitez avec le nom du pays
  //       });
  //     }
  //   }).addTo(this.map);
  // }
}