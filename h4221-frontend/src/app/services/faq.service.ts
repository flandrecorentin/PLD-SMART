import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FaqDetails, FaqAnswerDetails } from '../interfaces/faq-details.model';

@Injectable({
  providedIn: 'root'
})

export class FaqService {

  // Links to call back-end services
  private backendUrl = 'http://localhost:9000'
  private faqUrl = this.backendUrl + '/faq';
  private askFaqUrl = this.backendUrl + '/ask-faq';
  private answerFaqUrl = this.backendUrl + '/answer-faq';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("auth_token")}`,
  });

  constructor(private http: HttpClient) { }

  faq(
    //faqDetails: FaqDetails
  ) {
    return this.http.get(this.faqUrl,
      //faqDetails, 
      { headers: this.httpHeaders });
  }


  askFaq(
    faqDetails: FaqDetails
  ) {
    return this.http.post(this.askFaqUrl,
      faqDetails,
      { headers: this.httpHeaders });
  }

  answerFaq(
    faqAnswerDetails: FaqAnswerDetails
  ) {
    return this.http.post(this.answerFaqUrl,
      faqAnswerDetails,
      { headers: this.httpHeaders });
  }
}