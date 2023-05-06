import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.css']
})
export class InscriptionPageComponent {

  constructor(private fb: FormBuilder) { }

  inscriptionForm = this.fb.group({
    mail: ["", Validators.required],
    password: ["", Validators.required],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
  })

  submitInscription() {
    // Here, we need to call the back service to register a new user using the form value !
    console.log(this.inscriptionForm.value)
  }
}
