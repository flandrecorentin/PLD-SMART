import { HttpClient } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from'@angular/forms';
import { FaqService } from '../config/faq.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent {
  constructor(private fb: FormBuilder, private http: HttpClient, private faqService: FaqService) { }

  rechercheForm = this.fb.group({
    recherche: ["", Validators.required]
  });

  questionForm = this.fb.group({
    question: ["", Validators.required]
  });

  mockquestion="Is there a free trial available?";
  mockanswer="Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.Our friendly team will work with you to get you up and running as soon as possible.Our friendly team will work with you to get you up and running as soon as possible.Our friendly team will work with you to get you up and running as soon as possible.";
  mocktype="Logement"
  mocktype2="Bourses"
  mockquestionauthor="John Michel"
  mockanswerauthor="Idil LeIdil"
  mockdatequestion="12.02.2022"
  mockdateanswer="12.04.2022"
  popupqa={
    question:"",
    answer:"",
    type:"",
    answerdate:"",
    questiondate:"",
    answerauthor:"",
    questionauthor:"",
  }

  allqas=[
    {question:"1"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
  ,questionauthor:this.mockquestionauthor,
  answerauthor:this.mockanswerauthor,
  questiondate:this.mockdatequestion,
  answerdate:this.mockdateanswer
},
    {question:"2"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"3"+this.mockquestion, answer:this.mockanswer, type:this.mocktype2
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"4"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"5"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"6"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"7"+this.mockquestion, answer:this.mockanswer, type:this.mocktype2
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"8"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"9"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"10"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"12"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"13"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"14"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"15"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"16"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"17"+this.mockquestion, answer:this.mockanswer, type:this.mocktype2
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"18"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"19"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"20"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"21"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"22"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"23"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"24"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"25"+this.mockquestion, answer:this.mockanswer, type:this.mocktype2
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"26"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"27"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"28"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"29"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer},
    {question:"30"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
    ,questionauthor:this.mockquestionauthor,
    answerauthor:this.mockanswerauthor,
    questiondate:this.mockdatequestion,
    answerdate:this.mockdateanswer}
    ]  
    selectedqas = this.allqas;
    qas = this.allqas.slice(0,15);

    pagenumber=1;
    maxPageNumber = Math.ceil(this.selectedqas.length/15);

  submitRecherche() {
    //Here, we will call the service in order to log the user to Mobilit'if
    console.log(this.rechercheForm.value);
    this.selectedqas=this.allqas.filter(qa=> 
      qa.question.toLowerCase().includes(this.rechercheForm.value.recherche!.toLowerCase()) || 
      qa.answer.toLowerCase().includes(this.rechercheForm.value.recherche!.toLowerCase()));
    this.pagenumber=1;
    this.qas = this.selectedqas.slice((this.pagenumber-1)*15, this.pagenumber*15);
  }

  submitQuestion() {
    //Here, we will call the service in order to log the user to Mobilit'if
    console.log(this.questionForm.value);
  }

  

    onClickPlus(){
      if(this.pagenumber*15<this.selectedqas.length) {

        this.pagenumber++;
        this.qas = this.selectedqas.slice((this.pagenumber-1)*15, this.pagenumber*15);
      }
    }

    onClickMoins(){
      if(this.pagenumber>1){

        this.pagenumber = this.pagenumber-1;
        this.qas = this.selectedqas.slice((this.pagenumber-1)*15, this.pagenumber*15);
      }
    }
    onClickFilter(filtre: any){
      this.pagenumber=1;
      if(filtre=="All"){
        this.selectedqas = this.allqas; 
      }else{
        this.selectedqas = this.allqas.filter((t) => t.type==filtre); 
      }
      this.qas = this.selectedqas.slice((this.pagenumber-1)*15, this.pagenumber*15);
    }

    selectQuestion(qa:any){
      this.popupqa=qa;
      document.getElementById("popup")!.style.visibility="visible";
      document.getElementById("popup")!.style.opacity="1";
      document.getElementById("questiondetailspopup")!.style.visibility="visible";
    }
    onClickProposer(){
      document.getElementById("popup")!.style.visibility="visible";
      document.getElementById("popup")!.style.opacity="1";
      document.getElementById("proposerquestionpopup")!.style.visibility="visible";
    }
    onClickClose(){
      document.getElementById("popup")!.style.visibility="hidden";
      document.getElementById("popup")!.style.opacity="0";
      document.getElementById("questiondetailspopup")!.style.visibility="hidden";
      document.getElementById("proposerquestionpopup")!.style.visibility="hidden";
    }

    ngOnInit() {
      this.faqService.faq().subscribe(
        //(token: string) => {
        // localStorage.setItem('auth_token', token);
        // this.router.navigateByUrl('/');
      //}
      );
    }



}


