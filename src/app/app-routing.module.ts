import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { PrestataireDetailsComponent } from './pages/prestataire-details/prestataire-details.component';
import { AddPrestataireComponent } from './pages/add-prestataire/add-prestataire.component';


const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'sign', component: SignInComponent},
  { path: 'details', component: PrestataireDetailsComponent}
  { path: 'fillprofil', component: AddPrestataireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
