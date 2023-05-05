import { RouterModule, Routes } from '@angular/router';
import {Input, NgModule} from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'connexion', component: ConnexionPageComponent},
  // { path: 'curriculum', component: CurriculumComponent},
  // { path: 'projects', component: ProjectsComponent},
  // { path: 'hobbies/sport', component: HobbiesSportComponent},
  // { path: 'hobbies/art', component: HobbiesArtComponent},
  // { path: 'hobbies', component: HobbiesComponent},
  // { path: 'about', component: AboutComponent},
  // { path: 'contact', component: ContactComponent},
  // { path: 'svg/:id', component: SvgComponent},
  // { path: 'svg/:id', component: PageNotFoundComponent},
  // { path: 'index.html',   redirectTo: '', pathMatch: 'full' },
  // Route for 404 request : resources not found
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
