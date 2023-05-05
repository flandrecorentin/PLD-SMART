import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppSettings} from '../app-settings';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  resultat = ""
  constructor(private _httpClient: HttpClient) {
  }
  ngOnInit() {
  }
  onInscrit(){
    const req = this._httpClient.post(AppSettings.API_ENDPOINT+'inscription', {mail:'test@test', name:'THOMAS', password:'1234'}, {observe:'response'}).subscribe(response => {
      if(response.body!=null){
        this.resultat = response.body!.toString();
      }
    });
  }
  onConnecte(){
    const req = this._httpClient.post(AppSettings.API_ENDPOINT+'connection', {mail:'test@test', password:'1234'}, {observe:'response'}).subscribe(response => {
      if(response.body!=null){
        this.resultat = response.body!.toString();
      }
    });
  }
  
  httpGet(){
  }
  

}



