import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConnexionDetails } from '../interfaces/connexion-details.model';
import { InscriptionDetails } from '../interfaces/inscription-details.model';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  // Links to call back-end services
  backendUrl = 'http://localhost:9000'
  formURL = this.backendUrl + '/formulaire';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  sentForm(form: any) {
    return this.http.post(this.formURL, form, {headers: this.httpHeaders});
  }
}