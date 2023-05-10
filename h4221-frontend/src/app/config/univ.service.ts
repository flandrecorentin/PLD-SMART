import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnivService {

  // Links to call back-end services
  backendUrl = 'http://localhost:9000'
  univURL = this.backendUrl + '/universite';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("auth_token")}`,
});

  constructor(private http: HttpClient) { }


  getAllUnivs() {
    return this.http.get<JSON>(this.univURL, {headers: this.httpHeaders});
  }
  // modify(form:any) {
  //   return this.http.post<JSON>(this.formURL, form, {headers: this.httpHeaders});
  // }
}