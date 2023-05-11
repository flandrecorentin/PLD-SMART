import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  /* v_1
  backendUrl = 'http://localhost:9000'
  chatbotUrl = this.backendUrl + '/chatbot';
  */
  //V2 avec mini serveur python flask.
  //L'objectif est de pouvoir garder le modèle en mémoire, gain de perf.
  chatbotUrl = 'http://localhost:5000/chatbot'
  httpHeaders = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("auth_token")}`
  });
  constructor(private http: HttpClient) { }
  getAnswerFromBot(newMessage : string) {
    return this.http.post(this.chatbotUrl, {prompt: newMessage},{headers:this.httpHeaders, responseType: "text"})
    //return this.http.post(this.chatbotUrl, {prompt: newMessage},{headers:this.httpHeaders, responseType: "text"})
  }
}
