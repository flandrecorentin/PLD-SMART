import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  onCharge(){
    const req = this._httpClient.post('http://localhost:9000/inscription', {mail:'test@test', name:'THOMAS', password:'1234'}, {observe:'response'}).subscribe(response => {this.resultat = response.status.toString()});
  }
  httpGet(){
    }
  

}



