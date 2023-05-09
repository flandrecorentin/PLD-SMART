import { HttpClient } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from'@angular/forms';
import { FaqService } from '../config/faq.service';

@Component({
  selector: 'app-faq-admin-page',
  templateUrl: './faq-admin-page.component.html',
  styleUrls: ['./faq-admin-page.component.css']
})
export class FaqAdminPageComponent {
  constructor(private fb: FormBuilder, private http: HttpClient, private faqService: FaqService) { }

  rechercheForm = this.fb.group({
    recherche: ["", Validators.required]
  });

  answerForm = this.fb.group({
    answer: ["", Validators.required]
  });


  popupqa={
    question:"",
    answer:"",
    type:"",
    answerdate:"",
    questiondate:"",
    answerauthor:"",
    questionauthor:"",
    answered:true
  }

  allqas=[{
    question:"",
    answer:"",
    type:"",
    answerdate:"",
    questiondate:"",
    answerauthor:"",
    questionauthor:""}
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
      if(this.popupqa.answerauthor==null){
        this.popupqa.answered=false;
      }else{
        this.popupqa.answered=true;
      }
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

    submitAnswer(){
      var date = new Date();
      var dateText = date.getDay()+"-"+date.getMonth()+"-"+date.getFullYear()
      this.faqService.answerFaq({reponse:this.answerForm.value.answer,authorReponse:"auteur",dateReponse:dateText,question:this.popupqa.question}).subscribe(
        (datas: any) => {
            console.log("in");
            
          }

          // {question:"28"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
          // ,questionauthor:this.mockquestionauthor,
          // answerauthor:this.mockanswerauthor,
          // questiondate:this.mockdatequestion,
          // answerdate:this.mockdateanswer},

      );
      window.location.reload();
    }

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
          this.allqas = this.allqas.filter(t=>t.answer==null);
        this.selectedqas = this.allqas;
        this.qas = this.selectedqas.slice((this.pagenumber-1)*15, this.pagenumber*15);

          // {question:"28"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
          // ,questionauthor:this.mockquestionauthor,
          // answerauthor:this.mockanswerauthor,
          // questiondate:this.mockdatequestion,
          // answerdate:this.mockdateanswer},
        
        }
      );
    }





}


