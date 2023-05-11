import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-data';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navData = navbarData;
  isAdmin = false;
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) { }

  async ngOnInit() {
    this.authenticationService.getUserRole().subscribe(
      role => {
        if (role == "ROLE_ADMIN") {
          this.isAdmin = true;
        }
      }
    )
    console.log(this.isAdmin)
  }

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
