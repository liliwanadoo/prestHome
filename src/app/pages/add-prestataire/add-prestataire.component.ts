import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';


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
               private router: Router
    ) { }

/**
 * Controls getter
 */
public get pseudo(): AbstractControl {
  return this.clientForm.controls.pseudo;
}
 public get raisonSoc(): AbstractControl {
  return this.prestForm.controls.raisonSoc;
}
public get tel(): AbstractControl {
  return this.prestForm.controls.tel;
}

ngOnInit() {
  this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.idUsr = +params['id'];
      });
  console.log(this.idUsr);
  this.prestForm = this.formBuilder.group({
    id_usr: this.idUsr,
    raisonSoc: [
      '',
      [Validators.required,
        Validators.minLength(3)]
    ],
    tel: [
      '',
      [Validators.required,
        Validators.minLength(3)]
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
  if (this.prestForm.valid) {
    console.log('Yo.....DataPresta are : ' + JSON.stringify(this.prestForm.value));
    console.log('Yo.....Dataclient are : ' + JSON.stringify(this.clientForm.value));
   // Object.keys(this.prestForm.controls).forEach(key => {
   //   console.log(key + ' [ ' + JSON.stringify(this.prestForm.controls[key].errors) + '] : ' + this.prestForm.controls[key].status);
   // });
<<<<<<< HEAD
   // this.router.navigate(['']);
=======
    this.router.navigate(['']);
>>>>>>> myFeature
  // Cherry on cake : put a toast to inform the end categorie...
  } else {
    Object.keys(this.prestForm.controls).forEach(key => {
      console.log(key + ' [ ' + JSON.stringify(this.prestForm.controls[key].errors) + '] : ' + this.prestForm.controls[key].status);
    });

  }
}

}
