import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent {
  constructor(private fb: FormBuilder) { }

  rechercheForm = this.fb.group({
    recherche: ["", Validators.required]
  })

  mockquestion="Is there a free trial available?";
  mockanswer="Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.Our friendly team will work with you to get you up and running as soon as possible.Our friendly team will work with you to get you up and running as soon as possible.Our friendly team will work with you to get you up and running as soon as possible.";
  mocktype="Logement"
  mocktype2="Bourses"
  popupqa={
    question:"",
    answer:"",
    type:""
  }

  allqas=[
    {question:"1"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"2"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"3"+this.mockquestion, answer:this.mockanswer, type:this.mocktype2},
    {question:"4"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"5"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"6"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"7"+this.mockquestion, answer:this.mockanswer, type:this.mocktype2},
    {question:"8"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"9"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"10"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"12"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"13"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"14"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"15"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"16"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"17"+this.mockquestion, answer:this.mockanswer, type:this.mocktype2},
    {question:"18"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"19"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"20"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"21"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"22"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"23"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"24"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"25"+this.mockquestion, answer:this.mockanswer, type:this.mocktype2},
    {question:"26"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"27"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"28"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"29"+this.mockquestion, answer:this.mockanswer, type:this.mocktype},
    {question:"30"+this.mockquestion, answer:this.mockanswer, type:this.mocktype}
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
      document.getElementById("popup")!.style.visibility="visible";
      document.getElementById("popup")!.style.opacity="1";
    }
    onClickClose(){
      
      document.getElementById("popup")!.style.visibility="hidden";
      document.getElementById("popup")!.style.opacity="0";
    }




}

