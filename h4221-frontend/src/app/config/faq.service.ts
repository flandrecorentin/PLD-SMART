import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FaqDetails, FaqAnswerDetails } from '../interfaces/faq-details.model';
@Injectable({
  providedIn: 'root'
})

export class FaqService {

  // Links to call back-end services
  backendUrl = 'http://localhost:9000'
  faqUrl = this.backendUrl + '/faq';
  askFaqUrl = this.backendUrl + '/ask-faq';
  answerFaqUrl = this.backendUrl + '/answer-faq';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem("auth_token")}`,});

  constructor(private http: HttpClient) { }

  faq(
    //faqDetails: FaqDetails
    ) {
    return this.http.get(this.faqUrl, 
      //faqDetails, 
      {headers: this.httpHeaders});
  }


  askFaq(
    faqDetails: FaqDetails
    ) {
    return this.http.post(this.askFaqUrl, 
      faqDetails, 
      {headers: this.httpHeaders});
  }

  answerFaq(
    faqAnswerDetails: FaqAnswerDetails
    ) {
    return this.http.post(this.answerFaqUrl, 
      faqAnswerDetails, 
      {headers: this.httpHeaders});
  }
}