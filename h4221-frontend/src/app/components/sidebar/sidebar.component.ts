import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/config/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navData = navbarData;
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) { }

  rechercheForm = this.fb.group({
    recherche: ["", Validators.required]
  })

  submitRecherche() {
    console.log(this.rechercheForm.value);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl("/");
  }

}
