import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navData = navbarData;
  constructor(private fb: FormBuilder) { }

  rechercheForm = this.fb.group({
    recherche: ["", Validators.required]
  })

  submitRecherche() {
    //Here, we will call the service in order to log the user to Mobilit'if
    console.log(this.rechercheForm.value);
  }

}
