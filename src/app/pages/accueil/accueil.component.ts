import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/shared/service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  public viewBanner = true;
  public boutonBanner = 'Masquer le bandeau';
  public viewConnexion = true;
  public boutonConnexion = 'Connexion';
  public idUser: any;

  constructor(
    private sf: FormBuilder,
    private session: AuthentificationService,
    private router: Router
) {}


  ngOnInit() {
    this.affBoutonConnexion();
  }

  public affBoutonConnexion() {
    console.log('mon utilisateur : ' + sessionStorage.getItem('currentUser'));
    if (sessionStorage.getItem('currentUser') != null) {
      this.boutonConnexion = 'Deconnexion';
    } else {
      this.boutonConnexion = 'Connexion';
    }
  }

  public visibilityConnexion() {
    this.idUser = sessionStorage.getItem('currentUser');
    if ( this.idUser != null) {
      this.session.logout();
    } else {
      this.router.navigate(['login']);
    }
    this.affBoutonConnexion();
  }

  public visibilityBanner() {
    this.viewBanner = !this.viewBanner;
    if (this.viewBanner === false) {
      this.boutonBanner = 'Afficher le bandeau';
    } else {
      this.boutonBanner = 'Masquer le bandeau';
    }

  }

}
