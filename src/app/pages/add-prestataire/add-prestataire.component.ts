import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { HttpclientService } from 'src/app/shared/service/httpclient.service';
import { first } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Prestataire } from 'src/app/models/prestataire';
import { CategorieList } from 'src/app/models/categorie-list';
import { Categorie } from 'src/app/models/categorie';
import { Coordonnee } from 'src/app/models/coordonnee';
import { CoordonneeList } from 'src/app/models/coordonnee-list';


@Component({
  selector: 'app-add-prestataire',
  templateUrl: './add-prestataire.component.html',
  styleUrls: ['./add-prestataire.component.scss']
})
export class AddPrestataireComponent implements OnInit {
  public idUsr: number;
  private hasErrors = false;
  /**
   * Form manager handled by ReactiveForms
   */
  public clientForm: FormGroup;
  public prestForm: FormGroup;
  public profilavailable: string = null;
  public profilchoices: string[] = ['Client', 'Prestataire', 'Les deux'];
  sub: any;
   /**
    *
    * @param formBuilder As Dependency Injection
    */
   constructor(private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private http: HttpclientService,
               private collection: CategorieList,
               private citycollec: CoordonneeList
    ) { }
/**
 *  Categorie
 */
public categories: Array<Categorie>;
  public cat: Categorie;

/**
 *  Coordonnees
 */
@Input() all: boolean;
  public coordonnees: Array<Coordonnee>;
  public city: Coordonnee = new Coordonnee();
/**
 * Controls getter
 */
public get pseudo(): AbstractControl {
  return this.clientForm.controls.pseudo;
}
 public get raisonsociale(): AbstractControl {
  return this.prestForm.controls.raisonsociale;
}
public get tel(): AbstractControl {
  return this.prestForm.controls.tel;
}
public get categoriechosen(): AbstractControl {
  return this.prestForm.controls.categoriechosen;
}
public get description(): AbstractControl {
  return this.prestForm.controls.description;
}
public get villeP(): AbstractControl {
  return this.prestForm.controls.villeP;
}
public get villeC(): AbstractControl {
  return this.clientForm.controls.villeC;
}

ngOnInit() {
  // Coordonnees
  this.citycollec.getCollection(this.all).then((coords: Array<Coordonnee>) => {
  this.coordonnees = coords;
});
  // Categorie
  this.categories = this.collection.getCollection();
  // Passage de l'ID
  this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.idUsr = +params['id'];
      });
  // Creation de formulaire prestataire
  this.prestForm = this.formBuilder.group({
    raisonsociale: [
      '',
      [Validators.required,
        Validators.minLength(3)]
    ],
    tel: [
      '',
      [Validators.required,
        Validators.minLength(3)]
    ],
    categoriechosen: [
      '',
      [Validators.required]
    ],
    description: [
      '',
      [Validators.required]
    ],
    villeP: [
      '',
      [Validators.required]
    ]
  });
  // Creation de formulaire Client
  this.clientForm = this.formBuilder.group({
    pseudo: [
      '',
      [Validators.required,
        Validators.minLength(3)]
    ],
    villeC: [
      '',
      [Validators.required]
    ]
  });
}

  public submit() {
    if (this.clientForm.valid) {
    const newClient: Client = new Client();
    newClient.pseudo = this.pseudo.value;
    newClient.idusr = this.idUsr;
    newClient.idcoord = this.villeC.value;
    this.http.postClient(newClient).pipe(first())
    .subscribe((data: HttpResponse<number>) => {
      }, (error) => {
        console.log( 'not working sorry' );
      }
    );
  }
    if (this.prestForm.valid) {
      const newPresta: Prestataire = new Prestataire();
      newPresta.raisonsociale = this.raisonsociale.value;
      newPresta.telephone = this.tel.value;
      newPresta.idusr = this.idUsr;
      newPresta.idcat = this.categoriechosen.value;
      newPresta.idcoord = this.villeP.value;
      newPresta.description = this.description.value;
      // TODO : RAJOUTER LES AUTRES CHAMPS DU PRESTA
      this.http.postPrestataire(newPresta).pipe(first())
      .subscribe((data: HttpResponse<number>) => {
      }, (error) => {
        console.log( 'not working sorry' );
      }
      );

    // Object.keys(this.prestForm.controls).forEach(key => {
    //   console.log(key + ' [ ' + JSON.stringify(this.prestForm.controls[key].errors) + '] : ' + this.prestForm.controls[key].status);
    // });
      this.router.navigate(['']);
    // Cherry on cake : put a toast to inform the end categorie...
    } else {
      Object.keys(this.prestForm.controls).forEach(key => {
        console.log(key + ' [ ' + JSON.stringify(this.prestForm.controls[key].errors) + '] : ' + this.prestForm.controls[key].status);
      });

    }
}

}
