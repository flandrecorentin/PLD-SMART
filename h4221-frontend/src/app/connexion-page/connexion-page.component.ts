import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../config/authentication.service';
import { ConnexionDetails } from '../interfaces/connexion-details.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.css']
})
export class ConnexionPageComponent {

  constructor(private router: Router, private fb: FormBuilder, private authenticationService: AuthenticationService) { }

  loginForm = this.fb.group({
    login: ["", Validators.required],
    password: ["", Validators.required]
  })

  submitConnexion() {
    this.authenticationService.connexion(this.loginForm.value).subscribe((token: string) => {
      localStorage.setItem('auth_token', token);
      this.router.navigateByUrl('/');
    });
  }
}
