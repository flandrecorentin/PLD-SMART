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

  essai(event:any){
    console.log("AAAAAAAAh");
    console.log(event.target)
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
      this.qas = this.allqas.slice(0,5);

        // {question:"28"+this.mockquestion, answer:this.mockanswer, type:this.mocktype
        // ,questionauthor:this.mockquestionauthor,
        // answerauthor:this.mockanswerauthor,
        // questiondate:this.mockdatequestion,
        // answerdate:this.mockdateanswer},

      }
    );




    /* Bouton 4 - Afficher SVG */

  // var svg = chargerHttpXML("../assets/worldHigh.svg");
  // var serializer = new XMLSerializer();
  // var str = serializer.serializeToString(svg);
  // var elementHtmlParent = window.document.getElementById(
  //     "map"
  // );
  // elementHtmlParent!.innerHTML = str;
  // /* Ajout pour le bouton 5 */

  //     elementHtmlParent!.setAttribute(
  //         "style",
  //         "background-color: #0af;display: flex;flex-direction: row;justify-content:center;"
  //     )
  //     /* Ajouts pour la carte */
  //     const lesPays = document.getElementsByClassName("land");
  //     Array.from(lesPays).forEach((pays) => {
  //         // Do stuff here

  //         pays.addEventListener("mouseover", () =>
  //             console.log(pays.getAttribute("id"))
  //         );
  //         // pays.addEventListener("mouseleave", () =>
  //         //     )
  //         // );
  //     });


  //  Liste des universites


    // liste des pays
    // await this.univService.getAllUnivs().forEach(
    //   (rep:any) => {
    //     this.allUnivs=rep
    //     return 1;
    //   }
    // );
  }

  allUnivs=[{pays: ''}];
}
// function chargerHttpXML(xmlDocumentUrl:any) {

//   var httpAjax;

//   // httpAjax = window.XMLHttpRequest ?
//   //     new XMLHttpRequest() :
//   //     new ActiveXObject('Microsoft.XMLHTTP');
//   httpAjax = new XMLHttpRequest();

//   if (httpAjax.overrideMimeType) {
//       httpAjax.overrideMimeType('text/xml');
//   }

//   //chargement du fichier XML � l'aide de XMLHttpRequest synchrone (le 3� param�tre est d�fini � false)
//   httpAjax.open('GET', xmlDocumentUrl, false);
//   httpAjax.send();

//   return httpAjax.responseXML;
// }


