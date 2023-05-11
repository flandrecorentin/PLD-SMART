import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '../services/settings.service';
import { AuthenticationService } from '../services/authentication.service';
import { UnivService } from '../services/univ.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent {
  errorMessage = "";
  invalidCredentials = false;

  constructor(private router: Router, private fb: FormBuilder, private settingsService: SettingsService, private authenticationService: AuthenticationService, private univService: UnivService) { }

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

  submitMdp() {
    this.settingsService.modifyMdp({ nouveauMDP: this.mdpForm.value.nouveauMdp, ancienMDP: this.mdpForm.value.ancienMdp }).subscribe(
      (rep: any) => {

        this.router.navigateByUrl('/home')
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = "Le mot de passe actuel était erronné, veuillez l'entrer à nouveau"
        // Handle error
        // Use if conditions to check error code, this depends on your api, how it sends error messages
      });
  }

  submitSettings() {
    let JSONEnvoi = this.settingsForm.value;
    JSONEnvoi = {
      mail: this.settingsForm.value.mail,
      firstName: this.settingsForm.value.firstName,
      lastName: this.settingsForm.value.lastName,
      university: this.settingsForm.value.university,
      studyYear: "",
      departement: this.settingsForm.value.departement,
      country: this.settingsForm.value.country,
    }
    if (typeof (this.settingsForm.value.studyYear) == "number") {

      JSONEnvoi.studyYear = this.settingsForm.value.studyYear;
    }
    if (this.settingsForm.value.studyYear == "Autre") {
      JSONEnvoi.studyYear = "0"

    } else {
      JSONEnvoi.studyYear = this.settingsForm.value.studyYear![0]
    }

    let universiteTrouvee = this.allUnivs[0];
    let pastrouve = 1;
    for (const univIter of this.allUnivs) {
      if (univIter.nom == JSONEnvoi.university) {
        universiteTrouvee = univIter;
        pastrouve = 0;
        break;
      }
    }
    if (pastrouve == 1) {
      console.log("Ecole non existante")
      return 1;
    }

    if (JSONEnvoi.studyYear != "0" && JSONEnvoi.studyYear != "3" && JSONEnvoi.studyYear != "4" && JSONEnvoi.studyYear != "5") {

      console.log("Annee non existante")
      return 1;
    }
    if (JSONEnvoi.departement != "IF" && JSONEnvoi.departement != "GCU" && JSONEnvoi.departement != "GM" && JSONEnvoi.departement != "TC" && JSONEnvoi.departement != "GE" && JSONEnvoi.departement != "BS" && JSONEnvoi.departement != "SGM" && JSONEnvoi.departement != "GEN" && JSONEnvoi.departement != "GI") {

      console.log("Departement non existant")
      return 1;
    }

    JSONEnvoi.university = universiteTrouvee!.identifiant;
    this.settingsService.modify(JSONEnvoi).subscribe(
      (rep: any) => {

      });

    this.router.navigateByUrl("/home")
    return 0;
  }

  @Input() nom!: string;
  @Input() prenom!: string;
  @Output() prenomChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() mail!: string;
  @Input() nationalite!: string;
  @Input() annee!: string;
  @Input() universite!: string;
  @Input() departement!: string;
  allUnivs = [{ identifiant: '', nom: '', pays: '' }];
  async ngOnInit() {


    await this.authenticationService.getUserDetails().forEach(
      (rep: any) => {

        this.nom = rep.lastName
        this.prenom = rep.firstName
        this.mail = rep.mail
        this.nationalite = rep.country
        this.universite = rep.university
        this.departement = rep.departement
        if (rep.studyYear == "0") {
          this.annee = "Autre"
          rep.studyYear = this.annee
        } else {
          this.annee = rep.studyYear + "ème année"
          rep.studyYear = this.annee
        }
        this.settingsForm.setValue(rep);
      }
    );

    await this.univService.getAllUnivs().forEach(
      (rep: any) => {
        this.allUnivs = rep
        console.log(this.allUnivs)
        return 1;
      }
    );

    for (const univIter of this.allUnivs) {
      if (univIter.identifiant == this.universite) {
        this.universite = univIter.nom;
        break;
      }
    }
  }
}
