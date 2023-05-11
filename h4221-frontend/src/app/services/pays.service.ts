import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  // Links to call back-end services
  private backendUrl = 'http://localhost:9000'
  private paysURL = this.backendUrl + '/pays';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("auth_token")}`,
  });

  constructor(private http: HttpClient) { }

  getAllPays() {
    return this.http.get<JSON>(this.paysURL, { headers: this.httpHeaders });
  }

}
