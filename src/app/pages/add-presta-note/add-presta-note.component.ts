import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { DateValidatorService } from './../../shared/service/date-validator.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-presta-note',
  templateUrl: './add-presta-note.component.html',
  styleUrls: ['./add-presta-note.component.scss']
})
export class AddPrestaNoteComponent implements OnInit {

  constructor(
    private nf: FormBuilder,
    private dateValidator: DateValidatorService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  public hasErrors = false;
  noteForm: FormGroup;

  ngOnInit() {
    this.noteForm = this.nf.group({
      date: [
        '',
        Validators.required,
        this.dateValidator.isLowerThan.bind(this.dateValidator)
      ],
      amabilite: [
        '',
        Validators.required
      ],
      qualite: [
        '',
        Validators.required
      ],
      ponctualite: [
        '',
        Validators.required
      ],
      respectDelai: [
        ''
      ]
    });
  }

  public get date(): AbstractControl {
    return this.noteForm.controls.date;
  }
  public get qualite(): AbstractControl {
    return this.noteForm.controls.qualite;
  }
  public get amabilite(): AbstractControl {
    return this.noteForm.controls.amabilite;
  }
  public get ponctualite(): AbstractControl {
    return this.noteForm.controls.ponctualite;
  }
  public get respectDelai(): AbstractControl {
    return this.noteForm.controls.respectDelai;
  }

  public submit() {
    if (this.noteForm.valid) {
      console.log('Yo.....Datas are : ' + JSON.stringify(this.noteForm.value));

      this.router.navigate(['/details']);

      this.toastr.success('Votre notation à bien été enregistrée', 'NOTATION EFFECTUEE', {
      positionClass: 'toast-bottom-center'});
    } else {
      Object.keys(this.noteForm.controls).forEach(key => {
        console.log(key + ' [ ' + JSON.stringify(this.noteForm.controls[key].errors) + '] : ' + this.noteForm.controls[key].status);
      });
  }
}


}
