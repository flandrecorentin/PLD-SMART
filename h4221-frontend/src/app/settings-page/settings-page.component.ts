import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '../config/settings.service';
import { ConnexionDetails } from '../interfaces/connexion-details.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent {

  invalidCredentials = false;

  constructor(private router: Router, private fb: FormBuilder, private settingsService: SettingsService) { }

  settingsForm = this.fb.group({
    login: ["", Validators.required],
    password: ["", Validators.required]
  })

  submitSettings() {
    this.settingsService.modify(this.settingsForm.value).subscribe(
      (rep: any) => {
        
      });
  }
}
