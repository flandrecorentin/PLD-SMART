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
  

}



