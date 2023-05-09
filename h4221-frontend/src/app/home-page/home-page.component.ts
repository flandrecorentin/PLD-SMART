import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppSettings} from '../app-settings';
import { FaqService } from '../config/faq.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  resultat = ""
  constructor(private _httpClient: HttpClient, private faqService: FaqService) {
  }
  
  mockUniversites=[
    {name:"GE3 - Institute of International Education (IIE)", site:"google.com", fiche:"google.com"},
    {name:"Illinois Institute of Technology", site:"google.com", fiche:"google.com"},
    {name:"Georgia Institute of Technology (Georgia Tech)", site:"google.com", fiche:"google.com"},
    {name:"International Student Exchange Program (ISEP)", site:"google.com", fiche:"google.com"},
    {name:"GE3 - Institute of International Education (IIE)", site:"google.com", fiche:"google.com"},
    {name:"Illinois Institute of Technology", site:"google.com", fiche:"google.com"},
    {name:"Georgia Institute of Technology (Georgia Tech)", site:"google.com", fiche:"google.com"},
    {name:"International Student Exchange Program (ISEP)", site:"google.com", fiche:"google.com"},
  ]
  univs=this.mockUniversites;

  mockQas=[
    {question:"Is there a free trial available?", answer:"Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.", type:"logement"},
    {question:"Is there a free trial available?", answer:"Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.", type:"logement"},
    {question:"Is there a free trial available?", answer:"Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.", type:"logement"},
    {question:"Is there a free trial available?", answer:"Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.", type:"logement"},
    {question:"Is there a free trial available?", answer:"Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.", type:"logement"},
  ]
  qas=this.mockQas;
  allqas=[{
    question:"",
            answer:"",
            type:"",
            questionauthor:"",
            questiondate:"",
            answerauthor:"",
            answerdate:"",
  }];


  ngOnInit() {
    this.faqService.faq().subscribe(
      (datas: any) => {
        this.allqas=[];
        for (var data of datas){
          this.allqas.push({
            question:data.question,
            answer:data.reponse,
            type:data.categorie,
            questionauthor:data.authorQuestion,
            questiondate:data.dateQuestion,
            answerauthor:data.authorReponse,
            answerdate:data.date,
          })
          
        }
      this.qas = this.allqas.slice(0,5);

        // {question:"28"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
        // ,questionauthor:this.mockquestionauthor,
        // answerauthor:this.mockanswerauthor,
        // questiondate:this.mockdatequestion,
        // answerdate:this.mockdateanswer},
      
      }
    );
  }
}



