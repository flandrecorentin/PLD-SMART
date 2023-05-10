import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '../config/settings.service';
import { AuthenticationService } from '../config/authentication.service';
import { UnivService } from '../config/univ.service';
import { Userdetails } from '../interfaces/userdetails';
import { ConnexionDetails } from '../interfaces/connexion-details.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent {

  invalidCredentials = false;

  constructor(private router: Router, private fb: FormBuilder, private settingsService: SettingsService, private authenticationService : AuthenticationService, private univService: UnivService) { }

  settingsForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    departement: ["", Validators.required],
    mail: ["", Validators.required],
    country: ["", Validators.required],
    studyYear: ["", Validators.required],
    university: ["", Validators.required],
  })

  mdpForm = this.fb.group({
    nouveauMdp: ["", Validators.required],
    ancienMdp: ["", Validators.required],
  })

  submitMdp(){
    console.log("OUI")
  }

  submitSettings() {
    var JSONEnvoi=this.settingsForm.value;
    JSONEnvoi={
      mail:this.settingsForm.value.mail,
      firstName:this.settingsForm.value.firstName,
      lastName:this.settingsForm.value.lastName,
      university:this.settingsForm.value.university,
      studyYear:"",
      departement:this.settingsForm.value.departement,
      country:this.settingsForm.value.country,
    }
    if(this.annee=="Autre"){
      JSONEnvoi.studyYear= "0"
    }else{
      JSONEnvoi.studyYear= this.annee![0]
    }
    var universiteTrouvee=this.allUnivs[0];
    for(let univIter of this.allUnivs){
      if (univIter.nom==JSONEnvoi.university){
        universiteTrouvee=univIter;
        break;
      }
    }
    JSONEnvoi.university=universiteTrouvee!.identifiant;
    this.settingsService.modify(JSONEnvoi).subscribe(
      (rep: any) => {
        
      });

    this.router.navigateByUrl("/home")
  }

  @Input() nom!: string;
  @Input() prenom!:String;
@Output() prenomChange:EventEmitter<String> = new EventEmitter<String>();
  @Input() mail!: string;
  @Input() nationalite!: string;
  @Input() annee!: string;
  @Input() universite!: string;
  @Input() departement!: string;
  allUnivs=[{identifiant: '', nom: '', pays: ''}];
  async ngOnInit(){

    
    await this.authenticationService.getUserDetails().forEach(
      (rep:any) => {
        this.nom = rep.lastName
        this.prenom = rep.firstName
        this.mail = rep.mail
        this.nationalite = rep.country
        this.universite = rep.university
        this.departement = rep.departement
        if(rep.studyYear==0){
        this.annee = "Autre"
        }else{
          this.annee = rep.studyYear+"ème année"
        }
        this.settingsForm.setValue(rep);
      }
    );

    await this.univService.getAllUnivs().forEach(
      (rep:any) => {
        this.allUnivs=rep
        return 1;
      }
    );

    for(let univIter of this.allUnivs){
      if (univIter.identifiant==this.universite){
        this.universite=univIter.nom;
        break;
      }
    }
  }
}
