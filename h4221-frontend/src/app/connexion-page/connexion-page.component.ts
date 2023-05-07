import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfigService } from '../config/config.service';
import { ConnexionDetails } from '../interfaces/connexion-details.model';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.css']
})
export class ConnexionPageComponent {

  constructor(private fb: FormBuilder, private configService: ConfigService) { }

  loginForm = this.fb.group({
    login: ["", Validators.required],
    password: ["", Validators.required]
  })

  submitConnexion() {
    //Here, we will call the service in order to log the user to Mobilit'if
    console.log(this.loginForm.value);
    this.configService.connexion(this.loginForm.value).subscribe((data: ConnexionDetails) => console.log(data));
  }
}
