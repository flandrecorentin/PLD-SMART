import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FaqDetails } from '../interfaces/faq-details.model';
@Injectable({
  providedIn: 'root'
})

export class FaqService {

  // Links to call back-end services
  backendUrl = 'http://localhost:9000'
  faqUrl = this.backendUrl + '/faq';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  faq(
    //faqDetails: FaqDetails
    ) {
    return this.http.post(this.faqUrl, 
      //faqDetails, 
      {headers: this.httpHeaders});
  }
}