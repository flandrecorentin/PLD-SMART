import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  // Links to call back-end services
  private backendUrl = 'http://localhost:9000'
  private formURL = this.backendUrl + '/formulaire';
  private rexByUnivURL = this.backendUrl + '/formulaire/university/';
  private sendPartialFormUrl = this.backendUrl + '/formulaire-temp'
  private alreadySentUrl = this.backendUrl + '/formulaire-alreadysend'
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("auth_token")}`,
  });

  constructor(private http: HttpClient) { }

  sendForm(form: JSON) {
    return this.http.post(this.formURL, form, { headers: this.httpHeaders });
  }

  getForm() {
    return this.http.get<JSON>(this.formURL, { headers: this.httpHeaders });
  }

  sendPartialForm(form: JSON) {
    return this.http.post(this.sendPartialFormUrl, form, { headers: this.httpHeaders })
  }

  getPartialForm() {
    return this.http.get<JSON>(this.sendPartialFormUrl, { headers: this.httpHeaders })
  }

  hasAlreadySentForm() {
    return this.http.get<boolean>(this.alreadySentUrl, { headers: this.httpHeaders })
  }

  getRexByUniv(univId: string) {
    return this.http.get<JSON>(this.rexByUnivURL + univId, { headers: this.httpHeaders });
  }


}