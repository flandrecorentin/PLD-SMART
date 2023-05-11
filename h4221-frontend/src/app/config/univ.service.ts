import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnivService {

  // Links to call back-end services
  backendUrl = 'http://localhost:9000'
  univURL = this.backendUrl + '/universite';
  univDetailsURL = this.backendUrl+'/universite/details/';
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
  // http://localhost:9000/universite/Suede
  getAllUnivsByCountry(form:any) {
    return this.http.get<JSON>(this.univURL+"/"+form, {headers: this.httpHeaders});
  }

  getDetailsUniv(univId:string) {
    return this.http.get<JSON>(this.univDetailsURL+univId, {headers: this.httpHeaders});
  }
}
