import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Links to call back-end services
  backendUrl = 'http://localhost:9000'
  formURL = this.backendUrl + '/parametres';
  mdpURL = this.backendUrl + '/changepassword';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("auth_token")}`,
});

  constructor(private http: HttpClient) { }
  modify(form:any) {
    return this.http.put<JSON>(this.formURL, form, {headers: this.httpHeaders});
  }
  modifyMdp(form:any) {
    return this.http.put<JSON>(this.mdpURL, form, {headers: this.httpHeaders});
  }
}