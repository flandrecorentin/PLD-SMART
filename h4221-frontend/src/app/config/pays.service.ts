import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  // Links to call back-end services
  backendUrl = 'http://localhost:9000'
  paysURL = this.backendUrl + '/pays';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("auth_token")}`,
  });

  constructor(private http: HttpClient) { }

  // sendForm(form: JSON) {
  //   return this.http.post(this.formURL, form, {headers: this.httpHeaders});
  // }

  getAllPays() {
    return this.http.get<JSON>(this.paysURL, {headers: this.httpHeaders});
  }

}
