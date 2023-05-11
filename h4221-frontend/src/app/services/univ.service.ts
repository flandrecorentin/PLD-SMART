import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnivService {

  // Links to call back-end services
  private backendUrl = 'http://localhost:9000'
  private univURL = this.backendUrl + '/universite';
  private univDetailsURL = this.backendUrl + '/universite/details/';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("auth_token")}`,
  });

  constructor(private http: HttpClient) { }

  getAllUnivs() {
    return this.http.get<JSON>(this.univURL, { headers: this.httpHeaders });
  }

  getAllUnivsByCountry(form: any) {
    return this.http.get<JSON>(this.univURL + "/" + form, { headers: this.httpHeaders });
  }

  getDetailsUniv(univId: string) {
    return this.http.get<JSON>(this.univDetailsURL + univId, { headers: this.httpHeaders });
  }
}
