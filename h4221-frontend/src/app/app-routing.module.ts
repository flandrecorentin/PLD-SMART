import { RouterModule, Routes } from '@angular/router';
import {Input, NgModule} from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { FaqAdminPageComponent } from './faq-admin-page/faq-admin-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { AlreadyLoggedInGuard } from './shared/already-logged-in.guard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate:[AuthguardGuard]},
  { path: 'connexion', component: ConnexionPageComponent, canActivate:[AlreadyLoggedInGuard]},
  { path: 'inscription', component: InscriptionPageComponent, canActivate:[AlreadyLoggedInGuard]},
  { path: 'faq', component: FaqPageComponent, canActivate:[AuthguardGuard]},
  { path: 'form', component: FormPageComponent,canActivate:[AuthguardGuard]},
  { path: 'faq', component: FaqPageComponent, canActivate:[AuthguardGuard]},
  { path: 'form', component: FormPageComponent, canActivate:[AuthguardGuard]},
  { path: '', component: AccueilPageComponent, canActivate:[AlreadyLoggedInGuard]},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
