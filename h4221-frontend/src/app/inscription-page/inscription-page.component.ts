import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ConfigService } from '../config/config.service';
import { InscriptionDetails } from '../interfaces/inscription-details.model';

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.css']
})
export class InscriptionPageComponent {

  constructor(private fb: FormBuilder, private configService: ConfigService) { }

  inscriptionForm = this.fb.group({
    mail: ["", Validators.required],
    password: ["", Validators.required],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
  })

  submitInscription() {
    // Here, we need to call the back service to register a new user using the form value !
    console.log(this.inscriptionForm.value)
    if(this.inscriptionForm?.value != null){
      this.configService.inscription(this.inscriptionForm.value).subscribe((data: InscriptionDetails) => console.log(data));
    }
  }
}
