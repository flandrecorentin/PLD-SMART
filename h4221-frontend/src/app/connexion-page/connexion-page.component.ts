import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../config/authentication.service';
import { ConnexionDetails } from '../interfaces/connexion-details.model';
import { Router } from '@angular/router';
import { Userdetails } from '../interfaces/userdetails';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.css']
})
export class ConnexionPageComponent {

  invalidCredentials = false;

  constructor(private router: Router, private fb: FormBuilder, private authenticationService: AuthenticationService) { }

  loginForm = this.fb.group({
    login: ["", Validators.required],
    password: ["", Validators.required]
  })

  submitConnexion() {
    this.authenticationService.connexion(this.loginForm.value).subscribe(
      (rep: string) => {
      localStorage.setItem('auth_token', rep);
      this.authenticationService.getUserDetails().subscribe(
        (userDetails : Userdetails) => {
          if(userDetails.mail != null) {
            localStorage.setItem('mail', userDetails.mail);
          }
        }
      )
      this.router.navigateByUrl('/home');
      },
      (error) => {
        console.log(error);
        this.invalidCredentials = true;
      });
  }
}
