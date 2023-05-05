import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.css']
})
export class InscriptionPageComponent {
  mail = new FormControl();
  password = new FormControl();
  name = new FormControl();

    submitInscription() {
        console.log(this.name.value);
        console.log(this.password.value);
        console.log(this.mail.value); 

    }
}
