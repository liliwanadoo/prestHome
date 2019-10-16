import { Component, OnInit } from '@angular/core';
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
               private collection: CategorieList
    ) { }
/**
 *  Categorie
 */
public categories: Array<Categorie>;
  public cat: Categorie;
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
  return this.prestForm.controls.categorie;
}
public get description(): AbstractControl {
  return this.prestForm.controls.description;
}

ngOnInit() {
  this.categories = this.collection.getCollection();
  this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.idUsr = +params['id'];
      });
  console.log(this.idUsr);
  this.prestForm = this.formBuilder.group({
    id_usr: this.idUsr,
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
    ]
  });
  this.clientForm = this.formBuilder.group({
    id_usr: this.idUsr,
    pseudo: [
      '',
      [Validators.required,
        Validators.minLength(3)]
    ]
  });
}
ngOnDestroy() {
  this.sub.unsubscribe();
}
public submit() {
  if (this.clientForm.valid) {
    console.log('Yo.....Dataclient are : ' + JSON.stringify(this.clientForm.value));
    const newClient: Client = new Client();
    newClient.pseudo = this.pseudo.value;
    newClient.idusr = this.idUsr;
    this.http.postClient(newClient).pipe(first())
    .subscribe((data: HttpResponse<number>) => {
      console.log('you got this babe !' + data);
    }, (error) => {
      console.log( 'not working sorry' );
    }
    );
  }
  if (this.prestForm.valid) {
    console.log('Yo.....DataPresta are : ' + JSON.stringify(this.prestForm.value));
    const newPresta: Prestataire = new Prestataire();
    newPresta.raisonsociale = this.raisonsociale.value;
    newPresta.telephone = this.tel.value;
    newPresta.idusr = this.idUsr;
    //newPresta.idcat = this.categoriechosen.value;
    // TODO : RAJOUTER LES AUTRES CHAMPS DU PRESTA
    this.http.postPrestataire(newPresta).pipe(first())
    .subscribe((data: HttpResponse<number>) => {
      console.log('you got this babe !' + data);
    }, (error) => {
      console.log( 'not working sorry' );
    }
    );

   // Object.keys(this.prestForm.controls).forEach(key => {
   //   console.log(key + ' [ ' + JSON.stringify(this.prestForm.controls[key].errors) + '] : ' + this.prestForm.controls[key].status);
   // });
   // this.router.navigate(['']);
    this.router.navigate(['']);
  // Cherry on cake : put a toast to inform the end categorie...
  } else {
    Object.keys(this.prestForm.controls).forEach(key => {
      console.log(key + ' [ ' + JSON.stringify(this.prestForm.controls[key].errors) + '] : ' + this.prestForm.controls[key].status);
    });

  }
}

}
