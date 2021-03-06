import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './shared/ui/material/material.module';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPrestataireComponent } from './pages/add-prestataire/add-prestataire.component';
import { PrestataireDetailsComponent } from './pages/prestataire-details/prestataire-details.component';
import { AddPrestaNoteComponent } from './pages/add-presta-note/add-presta-note.component';

import { ListeCoordonneeComponent } from './pages/liste-coordonnee/liste-coordonnee.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ListeCategorieComponent } from './pages/liste-categorie/liste-categorie.component';
import { ListePrestataireComponent } from './pages/liste-prestataire/liste-prestataire.component';
import { RecherchePrestataireComponent } from './pages/recherche-prestataire/recherche-prestataire.component';
import { MapsComponent } from './pages/maps/maps.component';

import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ToolbarComponent,
    SignInComponent,
    AddPrestataireComponent,
    PrestataireDetailsComponent,
    AddPrestaNoteComponent,
    ListeCoordonneeComponent,
    ListePrestataireComponent,
<<<<<<< HEAD
    ListeCoordonneeComponent,
    ListeCategorieComponent,
<<<<<<< HEAD
    RecherchePrestataireComponent
=======
    ListeCategorieComponent,
    LoginComponent
>>>>>>> myFeature
=======
    RecherchePrestataireComponent,
    MapsComponent
>>>>>>> 753ac59accb8743dc39c18e102e5c1c339ca3daa

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
