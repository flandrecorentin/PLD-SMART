import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { FaqAdminPageComponent } from './faq-admin-page/faq-admin-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { UniversitePageComponent } from './universite-page/universite-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { AlreadyLoggedInGuard } from './shared/already-logged-in.guard';
import { AdminGuard } from './shared/admin.guard';
import { FormAlreadySentGuard } from './shared/form-already-sent.guard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate: [AuthguardGuard] },
  { path: 'connexion', component: ConnexionPageComponent, canActivate: [AlreadyLoggedInGuard] },
  { path: 'inscription', component: InscriptionPageComponent, canActivate: [AlreadyLoggedInGuard] },
  { path: 'settings', component: SettingsPageComponent, canActivate: [AuthguardGuard] },
  { path: 'faq', component: FaqPageComponent, canActivate: [AuthguardGuard] },
  { path: 'form', component: FormPageComponent, canActivate: [AuthguardGuard, FormAlreadySentGuard] },
  { path: 'faq', component: FaqPageComponent, canActivate: [AuthguardGuard] },
  { path: 'form', component: FormPageComponent, canActivate: [AuthguardGuard] },
  { path: 'universite', component: UniversitePageComponent, canActivate: [AuthguardGuard] },
  { path: '', component: AccueilPageComponent, canActivate: [AlreadyLoggedInGuard] },
  { path: 'faq-admin', component: FaqAdminPageComponent, canActivate: [AuthguardGuard, AdminGuard] },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
