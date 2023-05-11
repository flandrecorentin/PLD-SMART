import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaqService } from '../services/faq.service';
import { PaysService } from '../services/pays.service';
import { UnivService } from '../services/univ.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  resultat = ""
  univsOfTheCountry!: any;
  constructor(private _httpClient: HttpClient, private fb: FormBuilder, private faqService: FaqService, private paysService: PaysService, private univService: UnivService) {

  }
  paysForm = this.fb.group({
    pays: ["", Validators.required],
  })
  pays!: string;
  allPays = [{ identifiant: '' }];
  mockUniversites = [
    { name: "GE3 - Institute of International Education (IIE)", site: "google.com", fiche: "google.com" },
    { name: "Illinois Institute of Technology", site: "google.com", fiche: "google.com" },
    { name: "Georgia Institute of Technology (Georgia Tech)", site: "google.com", fiche: "google.com" },
    { name: "International Student Exchange Program (ISEP)", site: "google.com", fiche: "google.com" },
    { name: "GE3 - Institute of International Education (IIE)", site: "google.com", fiche: "google.com" },
    { name: "Illinois Institute of Technology", site: "google.com", fiche: "google.com" },
    { name: "Georgia Institute of Technology (Georgia Tech)", site: "google.com", fiche: "google.com" },
    { name: "International Student Exchange Program (ISEP)", site: "google.com", fiche: "google.com" },
  ]
  univs = this.mockUniversites;

  mockQas = [
    { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.", type: "logement" },
    { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.", type: "logement" },
    { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.", type: "logement" },
    { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.", type: "logement" },
    { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.", type: "logement" },
  ]
  qas = this.mockQas;
  allqas = [{
    question: "",
    answer: "",
    type: "",
    questionauthor: "",
    questiondate: "",
    answerauthor: "",
    answerdate: "",
  }];

  essai(event: any) {
    console.log("AAAAAAAAh");
    console.log(event.target)
  }

  async ngOnInit() {
    this.faqService.faq().subscribe(
      (datas: any) => {
        this.allqas = [];
        for (const data of datas) {
          this.allqas.push({
            question: data.question,
            answer: data.reponse,
            type: data.categorie,
            questionauthor: data.authorQuestion,
            questiondate: data.dateQuestion,
            answerauthor: data.authorReponse,
            answerdate: data.date,
          })

        }
        this.qas = this.allqas.slice(0, 5);
      }
    );

    await this.univService.getAllUnivs().forEach(
      (rep: any) => {
        this.univsOfTheCountry = rep
        return 1;
      }
    );

    // liste des pays
    await this.paysService.getAllPays().forEach(
      (rep: any) => {
        console.log(rep)
        this.allPays = rep
        return 1;
      }
    );
  }


  submitPays() {
    console.log(this.paysForm.value.pays)
    this.univService.getAllUnivsByCountry(this.paysForm.value.pays).subscribe(
      (rep: any) => {
        this.univsOfTheCountry = rep;
        console.log(this.univsOfTheCountry)
      });
  }

  ngAfterViewInit() {
    let selectedArea: any = null;
    const areas = document.querySelectorAll<SVGElement>('path');
    areas.forEach((area) => {
      area.addEventListener('mouseover', function () {
        area.style.fill = '#93c2ae';
      });
      area.addEventListener('mouseout', function () {
        area.style.fill = '';
      });
      area.addEventListener('click', function () {
        console.log(selectedArea)
        // Here, we would finally call our RESTApi to filter the country name.
        if (selectedArea) {
          document.querySelector<SVGElement>(`#${selectedArea}`)!.setAttribute('class', 'st0');
        }
        if (selectedArea !== area.id) {
          selectedArea = area.id;
          area.setAttribute('class', 'selectedArea');
        }
      });
    });
  }

}
