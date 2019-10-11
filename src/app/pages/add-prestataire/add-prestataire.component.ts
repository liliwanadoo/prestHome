import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-prestataire',
  templateUrl: './add-prestataire.component.html',
  styleUrls: ['./add-prestataire.component.scss']
})
export class AddPrestataireComponent implements OnInit {

  private hasErrors = false;
  /**
   * Form manager handled by ReactiveForms
   */
  public prestForm: FormGroup;

   /**
    *
    * @param formBuilder As Dependency Injection
    */
   constructor(private formBuilder: FormBuilder,
               private toastr: ToastrService
    ) { }

/**
 * Controls getter
 */
 public get raisonSoc(): AbstractControl {
  return this.prestForm.controls.raisonSoc;
}
public get tel(): AbstractControl {
  return this.prestForm.controls.tel;
}

ngOnInit() {
  this.prestForm = this.formBuilder.group({
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
}

public submit() {
  if (this.prestForm.valid) {
    console.log('Yo.....Datas are : ' + JSON.stringify(this.prestForm.value));
   // Object.keys(this.prestForm.controls).forEach(key => {
   //   console.log(key + ' [ ' + JSON.stringify(this.prestForm.controls[key].errors) + '] : ' + this.prestForm.controls[key].status);
   // });
    this.toastr.success('Votre compte en tant que prestataire ' + this.prestForm.controls.raisonSoc + ' est créé', 'Info');
  // this.router.navigate(['']);
  // Cherry on cake : put a toast to inform the end categorie...
  } else {
    Object.keys(this.prestForm.controls).forEach(key => {
      console.log(key + ' [ ' + JSON.stringify(this.prestForm.controls[key].errors) + '] : ' + this.prestForm.controls[key].status);
    });

  }
}

}
