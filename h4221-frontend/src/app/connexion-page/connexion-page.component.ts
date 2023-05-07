import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.css']
})
export class ConnexionPageComponent {

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    login: ["", Validators.required],
    password: ["", Validators.required]
  })

  submitConnexion() {
    //Here, we will call the service in order to log the user to Mobilit'if
    console.log(this.loginForm.value);
  }
}
