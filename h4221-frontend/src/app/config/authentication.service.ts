import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConnexionDetails } from '../interfaces/connexion-details.model';
import { InscriptionDetails } from '../interfaces/inscription-details.model';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  // Links to call back-end services
  backendUrl = 'http://localhost:9000'
  inscriptionUrl = this.backendUrl + '/inscription';
  connexionUrl = this.backendUrl + '/connexion'
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  inscription(inscriptionDetails: InscriptionDetails) {
    return this.http.post(this.inscriptionUrl, inscriptionDetails, {headers: this.httpHeaders});
  }

  connexion(userCredentials: ConnexionDetails) {
    return this.http.post(this.connexionUrl, userCredentials, {headers: this.httpHeaders, responseType:"text"});
  }

  isLoggedIn() {
    return localStorage.getItem("auth_token") != null;
  }

  logout() {
    localStorage.removeItem("auth_token");
  }
}