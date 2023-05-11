import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.css']
})
export class InscriptionPageComponent {

  constructor(private router: Router, private fb: FormBuilder, private authenticationService: AuthenticationService) { }

  inscriptionForm = this.fb.group({
    mail: ["", Validators.required],
    password: ["", Validators.required],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
  })

  submitInscription() {
    if (this.inscriptionForm?.value != null) {
      this.authenticationService.inscription(this.inscriptionForm.value).subscribe(res => {
        this.router.navigateByUrl('/connexion');
      }
      );
    }
  }
}
