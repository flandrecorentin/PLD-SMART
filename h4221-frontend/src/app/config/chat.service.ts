import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FaqDetails, FaqAnswerDetails } from '../interfaces/faq-details.model';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  // Links to call back-end services
  backendUrl = 'http://localhost:9000';
  chatGetConvByUniUrl = this.backendUrl + '/conversationsByUni/';
  chatGetMessagesByConvUrl = this.backendUrl + '/conversationById/';
  chatCreateConvUrl = this.backendUrl + '/conversation/create';
  chatSendMessageUrl = this.backendUrl + '/conversation/speak';

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
  });

  constructor(private http: HttpClient) {}

  chatGetConvByUni(idUniv: string) {
    return this.http.get(
      this.chatGetConvByUniUrl + idUniv,
      //faqDetails,
      { headers: this.httpHeaders }
    );
  }

  chatGetMessagesByConv(idConv: string) {
    return this.http.get(
      this.chatGetMessagesByConvUrl + idConv,
      //faqDetails,
      { headers: this.httpHeaders }
    );
  }

  chatSendMessage(chatDetails: any) {
    return this.http.post(this.chatSendMessageUrl, chatDetails, {
      headers: this.httpHeaders,
    });
  }

  chatCreateConv(convDetails: any) {
    return this.http.post(this.chatCreateConvUrl, convDetails, {
      headers: this.httpHeaders,
    });
  }
}
