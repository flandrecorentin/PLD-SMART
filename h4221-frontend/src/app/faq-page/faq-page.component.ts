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
    question: ["", Validators.required],
    categorie: ["", Validators.required]
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
      (qa.answer!=null ? qa.answer.toLowerCase().includes(this.rechercheForm.value.recherche!.toLowerCase()) : false));
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
        
        var elements = document.getElementsByTagName('button');
        Array.from(elements).forEach(function (element) {
          element.style.backgroundColor = "white";
        });
        document.getElementById("buttonAll")!.style.backgroundColor="#c7c7c7";
      }else{
        this.selectedqas = this.allqas.filter((t) => t.type==filtre);
        var elements = document.getElementsByTagName('button');
        Array.from(elements).forEach(function (element) {
          console.log(element);
          element.style.backgroundColor = "#ffffff";
          console.log(element);
        });
        document.getElementById("button"+filtre)!.style.backgroundColor="#c7c7c7";
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

    submitQuestion(){
      var date = new Date();
      var dateText = date.getDay()+"-"+date.getMonth()+"-"+date.getFullYear();
      var mail = localStorage.getItem("mail");

      this.faqService.askFaq({question:this.questionForm.value.question,authorQuestion:mail,dateQuestion:dateText,categorie:this.questionForm.value.categorie}).subscribe(
        (datas: any) => {
            
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
          // function compare(a, b) {
          //   if (a est inférieur à b selon les critères de tri)
          //      return -1;
          //   if (a est supérieur à b selon les critères de tri)
          //      return 1;
          //   // a doit être égal à b
          //   return 0;
          // }

          this.allqas.sort(function(a,b) {
            
            var datea, dateb
            if(a.answer!=null){
               datea = a.answerdate.split('-')
            }else{
               datea = a.questiondate.split('-')
            }

            if(b.answer!=null){
              dateb = b.answerdate.split('-')
           }else{
              dateb = b.questiondate.split('-')
           }

           if(datea[2]!=dateb[2]){
            return +dateb[2]- +datea[2];
           }else if(datea[1]!=dateb[1]){
            return +dateb[1]- +datea[1];
           }else if(datea[0]!=dateb[0]){
            return +dateb[0]- +datea[0];
           }else{
            return 0;
           }
           
           
           
          })
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


