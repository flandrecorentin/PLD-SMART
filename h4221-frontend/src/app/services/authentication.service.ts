import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConnexionDetails } from '../interfaces/connexion-details.model';
import { InscriptionDetails } from '../interfaces/inscription-details.model';
import { Userdetails } from '../interfaces/userdetails';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  // Links to call back-end services
  private backendUrl = 'http://localhost:9000'
  private inscriptionUrl = this.backendUrl + '/inscription';
  private connexionUrl = this.backendUrl + '/connexion'
  private userDetailsUrl = this.backendUrl + '/information'
  private roleDetailsUrl = this.backendUrl + '/role'
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  inscription(inscriptionDetails: InscriptionDetails) {
    return this.http.post(this.inscriptionUrl, inscriptionDetails, { headers: this.httpHeaders });
  }

  connexion(userCredentials: ConnexionDetails) {
    return this.http.post(this.connexionUrl, userCredentials, { headers: this.httpHeaders, responseType: "text" });
  }

  isLoggedIn() {
    return localStorage.getItem("auth_token") != null;
  }

  logout() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("mail");
  }

  getUserDetails() {
    return this.http.get<Userdetails>(this.userDetailsUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("auth_token")}`
      })
    });
  }

  getUserRole() {
    return this.http.get(this.roleDetailsUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("auth_token")}`
      }), responseType: "text"
    });
  }
}
