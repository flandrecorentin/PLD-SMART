import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Links to call back-end services
  backendUrl = 'http://localhost:9000'
  formURL = this.backendUrl + '/formulaire';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("auth_token")}`,
});

  constructor(private http: HttpClient) { }

  sentForm(form: any) {
    return this.http.post(this.formURL, form, {headers: this.httpHeaders});
  }

  getForm() {
    return this.http.get<JSON>(this.formURL, {headers: this.httpHeaders});
  }modify(form:any) {
    return this.http.post<JSON>(this.formURL, form, {headers: this.httpHeaders});
  }
}