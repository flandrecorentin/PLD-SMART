import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-universite-page',
  templateUrl: './universite-page.component.html',
  styleUrls: ['./universite-page.component.css']
})
export class UniversitePageComponent {
  univId:string;

  
  mockUniversite={
    "nom":"University of Birmingham",
    "chat":[
      {
        "nom":"Trouver une colloc",
        "date":"01-02-2023",
      },{
        "nom":"Remplir le OLA",
        "date":"03-02-2023",
      },{
        "nom":"Fonctionnement de préavis à l'étranger",
        "date":"06-02-2023",
      },{
        "nom":"Quand prenez vous votre avion ?",
        "date":"10-02-2023",
      },{
        "nom":"Quand prenez vous votre avion ?",
        "date":"10-02-2023",
      },{
        "nom":"Quand prenez vous votre avion ?",
        "date":"10-02-2023",
      },{
        "nom":"Quand prenez vous votre avion ?",
        "date":"10-02-2023",
      },{
        "nom":"Quand prenez vous votre avion ?",
        "date":"10-02-2023",
      },{
        "nom":"Quand prenez vous votre avion ?",
        "date":"10-02-2023",
      }
    ]
  }
  universite=this.mockUniversite
  constructor(private route: ActivatedRoute, private router: Router) {
    this.univId=""
    
  }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.univId = params['univId'];
      }
    );
    if(this.univId==null){
      console.log("Identifiant d'université absent")
      this.router.navigateByUrl("/home")
    }

  }
  reveal(i:any){
    console.log(i);
  }

  chatActuel={
    "nom":"Quand prenez vous votre avion ?",
    "date":"10-02-2023",
    "messages":[{
        "contenu":"Salut tout le monde !",
        "date":"10-20-2023",
        "heure":"10:23:23",
        "auteur":"corentin.flandre@insa-lyon.fr"
      },{
        "contenu":"Salut wesh !",
        "date":"10-20-2023",
        "heure":"10:23:27",
        "auteur":"colin.thomas@insa-lyon.fr"
      },{
        "contenu":"Bonjour à tout, ceci est un message à rallonge pour faire des essais de message à rallonge",
        "date":"10-20-2023",
        "heure":"10:24:01",
        "auteur":"elise.dubillot@insa-lyon.fr"
      },{
        "contenu":"certes",
        "date":"10-20-2023",
        "heure":"10:25:23",
        "auteur":"tom.delaporte@insa-lyon.fr"
      },
    ]
  }
}
