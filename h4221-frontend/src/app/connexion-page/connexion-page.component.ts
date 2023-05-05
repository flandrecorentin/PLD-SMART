import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.css']
})
export class ConnexionPageComponent {
  id = new FormControl();
  password = new FormControl();

    submitConnexion() {
        console.log(this.id.value);
        console.log(this.password.value);

    }
}
