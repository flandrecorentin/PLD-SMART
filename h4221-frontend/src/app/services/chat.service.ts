import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  // Links to call back-end services
  private backendUrl = 'http://localhost:9000';
  private chatGetConvByUniUrl = this.backendUrl + '/conversationsByUni/';
  private chatGetMessagesByConvUrl = this.backendUrl + '/conversationById/';
  private chatCreateConvUrl = this.backendUrl + '/conversation/create';
  private chatSendMessageUrl = this.backendUrl + '/conversation/speak';

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
  });

  constructor(private http: HttpClient) { }

  chatGetConvByUni(idUniv: string) {
    return this.http.get(
      this.chatGetConvByUniUrl + idUniv,
      { headers: this.httpHeaders }
    );
  }

  chatGetMessagesByConv(idConv: string) {
    return this.http.get(
      this.chatGetMessagesByConvUrl + idConv,
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
