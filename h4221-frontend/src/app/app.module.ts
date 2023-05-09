import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SurveyModule } from 'survey-angular-ui';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormComponent } from './components/form/form.component';
import { FormPageComponent } from './form-page/form-page.component';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomePageComponent,
    ConnexionPageComponent,
    InscriptionPageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FaqPageComponent,
    FormComponent,
    FormPageComponent,
    AccueilPageComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SurveyModule,
    ScrollingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ], // Must add this one.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

